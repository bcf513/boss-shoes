import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { Product, ProductInCart } from "../../types/cart";

interface CartContextProps {
  isCartModalOpen: boolean;
  toggleModal: () => void;
  cart: ProductInCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cart, setCart] = useState<ProductInCart[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const addToCart = (product: Product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const newCart = [...cart];
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    }
  };

  const removeFromCart = (productId: number) => {
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex == -1) return;

    const newCart = [...cart];
    if (newCart[productIndex].quantity > 1) {
      newCart[productIndex].quantity -= 1;
    } else {
      newCart.splice(productIndex, 1);
    }
    setCart(newCart);
  };

  const value = React.useMemo(
    () => ({
      isCartModalOpen,
      toggleModal,
      cart,
      addToCart,
      removeFromCart,
    }),
    [isCartModalOpen, cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

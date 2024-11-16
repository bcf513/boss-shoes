import React, { createContext, useState, ReactNode, useContext } from "react";

interface CartContextProps {
  isCartModalOpen: boolean;
  toggleModal: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const toggleModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const value = React.useMemo(
    () => ({ isCartModalOpen, toggleModal }),
    [isCartModalOpen]
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

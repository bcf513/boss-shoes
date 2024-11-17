interface Product {
  id: number;
  model: string;
  description: string;
  photo: string;
  price: number;
}

interface ProductInCart extends Product {
  quantity: number;
}

export type { Product, ProductInCart };

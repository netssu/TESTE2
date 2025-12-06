export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  hasPickup: boolean;
}

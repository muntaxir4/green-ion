import { atom } from "recoil";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image: string;
}

export interface Order {
  id: string;
  customerEmail: string;
  products: Array<{
    productId: string;
    name: string;
    quantity: number;
    priceAtTime: number;
    unit: string;
  }>;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'in-transit' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery: string;
  shippingAddress: {
    company: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  trackingNumber?: string;
}

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const userEmail = atom({
  key: "userEmail",
  default: "",
});

export const cartItems = atom<CartItem[]>({
  key: "cartItems",
  default: [],
});

export const userOrders = atom<Order[]>({
  key: "userOrders",
  default: [],
});

export const isCheckingOut = atom({
  key: "isCheckingOut",
  default: false,
});

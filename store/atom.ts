import { atom } from "recoil";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image: string;
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


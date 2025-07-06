import { atom } from "recoil";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image: string;
}

const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

const userEmail = atom({
  key: "userEmail",
  default: "",
});

const cartItems = atom<CartItem[]>({
  key: "cartItems",
  default: [],
});


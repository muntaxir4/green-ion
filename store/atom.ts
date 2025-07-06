import { atom } from "recoil";

const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

const userEmail = atom({
  key: "userEmail",
  default: "",
});

const cartItems = atom({
  key: "cartItems",
  default: [],
});

export { isLoggedIn, userEmail, cartItems };

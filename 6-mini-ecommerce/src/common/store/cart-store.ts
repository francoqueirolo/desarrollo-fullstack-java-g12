import { create } from "zustand";
import type { Product } from "../types";
import { persist } from "zustand/middleware";

interface CartStore {
  cart: Product[];
  addProductToCart: (value: Product) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addProductToCart: (newProduct) =>
        set((state) => ({ cart: [...state.cart, newProduct] })),
    }),
    {
      name: "user-cart",
    }
  )
);

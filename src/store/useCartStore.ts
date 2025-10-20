import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
      id: number,
      title: string,
      image: string,
      color: string,
      size: string,
      quantity: number,
      price: string,
      maxQuantity: number,
      total: number
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  editCartItem: (id: number, updatedItem: Partial<CartItem>) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
   persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== id),
        })),

      editCartItem: (id, updatedItem) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, ...updatedItem } : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
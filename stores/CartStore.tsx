import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (menu) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === menu.id);

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === menu.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...menu, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () =>
        set(() => ({
          cart: [],
        })),
    }),
    {
      name: "product-cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;

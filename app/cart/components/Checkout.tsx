"use client";

import { Button } from "@/components/ui/button";
import { useMenus } from "@/hooks/useMenus";
import useCartStore from "@/stores/CartStore";

export default function CheckoutPage() {
  const { data } = useMenus();
  const cart = useCartStore((state) => state.cart);

  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const clearCart = useCartStore((state) => state.clearCart);
  function handleCheckout() {
    if (cart.length === 0) {
      alert("Cart masih kosong");
      return;
    }

    const isStockInsufficient = cart.some((item) => {
      const product = data?.data.find((menu) => menu.id === item.id);

      return !product || item.quantity > product.stock;
    });

    if (isStockInsufficient) {
      alert("Stock produk tidak cukup");
      return;
    }

    clearCart();
    alert("Thanks for shopping");
  }

  return (
    <div className="w-full  p-4">
      <div className="w-full bg-white shadow p-3 rounded-lg">
        <h1 className="font-bold text-2xl">Shopping Summary</h1>
        <div className="flex justify-between items-center mt-4">
          <p>Total items : {totalQty}</p>
          <h3 className="font-semibold text-lg">
            Rp{totalPrice.toLocaleString()}
          </h3>
        </div>
        <Button
          variant={"default"}
          onClick={handleCheckout}
          className="w-full bg-green-500 transition-colors duration-300 cursor-pointer hover:bg-green-700 mt-4"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

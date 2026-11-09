"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "@/stores/CartStore";
import { Trash } from "lucide-react";
import Image from "next/image";

export default function ShoppingCartPage() {
  const carts: CartItem[] = useCartStore((state) => state.cart);

  const increaseQty = useCartStore((state) => state.increaseQuantity);
  const decreaseQty = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="w-full  p-4">
      <div className="w-full bg-white shadow p-3 rounded-lg">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <div className="w-full mt-4 flex flex-col gap-4">
          {carts.length > 0 ? (
            carts.map((cart) => {
              const countQty = cart.price * cart.quantity;

              function handleAlertDeteleProduct() {
                if (cart.quantity === 1) {
                  const confirmed = confirm("Yakin mau menghapus item ini?");

                  if (!confirmed) return;
                }

                decreaseQty(cart.id);
              }

              return (
                <div
                  key={cart.id}
                  className="grid grid-cols-4 border-b-2 border-gray-200 p-3"
                >
                  <div className="">
                    <div className="w-20 h-20 relative mx-auto overflow-hidden rounded-lg">
                      <Image
                        src={cart.image}
                        alt={cart.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className=" col-span-2 place-content-center">
                    <h3 className="font-semibold text-lg">{cart.title}</h3>
                    <p className="font-semibold  text-lg">
                      Rp{countQty.toLocaleString()}
                    </p>
                  </div>

                  <div className="  flex items-center justify-end gap-3">
                    <Button
                      variant={"outline"}
                      onClick={() => increaseQty(cart.id)}
                    >
                      +
                    </Button>
                    <p className="font-light place-self-center text-sm text-gray-500">
                      x{cart.quantity}
                    </p>
                    <Button
                      variant={"outline"}
                      onClick={handleAlertDeteleProduct}
                      className={`${cart.quantity > 1 ? "bg-white" : "bg-red-500"}`}
                    >
                      {cart.quantity > 1 ? "-" : <Trash />}
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Items not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

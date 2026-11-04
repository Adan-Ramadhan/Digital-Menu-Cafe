"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "@/stores/CartStore";
import Image from "next/image";

export default function ShoppingCartPage() {
  const carts: CartItem[] = useCartStore((state) => state.cart);

  const increaseQty = useCartStore((state) => state);
  const decreaseQty = useCartStore((state) => state);


  return (
    <div className="w-full p-4">
      <div className="w-full">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <div className="w-full">
          {carts.length > 0 ? (
            carts.map((cart) => {
              increaseQty.increaseQuantity(cart.id);
              decreaseQty.decreaseQuantity(cart.id);

              return (
                <div key={cart.id} className="grid grid-cols-4 ">
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

                  <div className=" col-span-2 ">
                    <h3 className="font-semibold">{cart.title}</h3>
                    <p className="font-light text-sm text-gray-500">
                      x{cart.quantity}
                    </p>
                    <p className="font-semibold text-lg">
                      Rp{cart.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="  flex items-center justify-end">
                    <Button>Edit</Button>
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

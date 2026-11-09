import useCartStore from "@/stores/CartStore";
import Link from "next/link";
// icons
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const menuInCart = useCartStore((state) => state.cart);

  const totalQty = menuInCart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="w-full p-4 bg-amber-800">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="w-full">
          <h3 className="uppercase text-white font-bold">Digital Menu Cafe</h3>
        </Link>
        <div className="w-full flex gap-4 justify-end items-center">
          <button className="rounded-full px-6 cursor-pointer py-2 hover:bg-amber-600 transition-colors duration-300 bg-orange-400 text-white font-semibold">
            Order Now
          </button>

          <Link href={"/cart"}>
            <div className="text-white text-xl cursor-pointer hover:text-gray-300 relative">
              <FaShoppingCart />

              {totalQty > 0 && (
                <span className="absolute bg-red-600 text-white font-normal text-center text-xs w-5 h-5 -top-3 -left-2 rounded-full">
                  {totalQty}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

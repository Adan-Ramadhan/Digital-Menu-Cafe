import Link from "next/link";
// icons
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full p-4 bg-amber-800">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="w-full">
          <h3 className="uppercase text-white font-bold">Digital Menu Cafe</h3>
        </Link>
        <div className="w-full flex gap-4 justify-end">
          <button className="rounded-full px-6 cursor-pointer py-2 hover:bg-amber-600 transition-colors duration-300 bg-orange-400 text-white font-semibold">
            Order Now
          </button>
          <button className="text-white text-xl cursor-pointer hover:text-gray-300">
            <FaShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

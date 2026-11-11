"use client";

import useCartStore from "@/stores/CartStore";
import Link from "next/link";
import { useState } from "react";
// icons
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

interface navigationMenusType {
  id: number;
  title: string;
  url: string;
}

const navigationMenus: navigationMenusType[] = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const menuInCart = useCartStore((state) => state.cart);
  const [isShowNavigation, setIsShowNavigation] = useState<boolean>(false);
  const totalQty = menuInCart.reduce((total, item) => total + item.quantity, 0);

  function handleHamburgerOpen() {
    setIsShowNavigation(!isShowNavigation);
  }

  return (
    <header className="w-full min-h-auto relative">
      <nav className="flex p-4 z-20 relative justify-between bg-amber-800 items-center">
        <Link href={"/"} className="w-full">
          <h3 className="uppercase text-white font-bold">Digital Menu Cafe</h3>
        </Link>
        <div className="w-full flex gap-4 justify-end items-center">
          {/* dekstop navigation */}
          <div className="hidden lg:flex gap-3 ">
            {navigationMenus.length > 0 &&
              navigationMenus.map((nav) => {
                return (
                  <ul key={nav.id}>
                    <Link href={nav.url}>
                      <li className={`font-semibold hover:text-amber-400 transition-colors cursor-pointer duration-300 text-white`}>{nav.title}</li>
                    </Link>
                  </ul>
                );
              })}
          </div>

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


          <Button variant={"link"} onClick={handleHamburgerOpen} className="block lg:hidden">
            <Menu size={60} />
          </Button>
        </div>
      </nav>

      {/* mobile navigation */}
      <nav
        className={`${isShowNavigation ? "translate-y-0" : "-translate-y-30"} w-full bg-amber-500 flex flex-col items-center justify-center gap-3 py-3  transition-transform duration-300 absolute lg:hidden`}
      >
        {navigationMenus.length > 0 &&
          navigationMenus.map((nav) => {
            return (
              <ul key={nav.id}>
                <Link href={nav.url}>
                  <li
                    className={`font-semibold hover:text-amber-700 transition-colors cursor-pointer duration-300 text-white`}
                  >
                    {nav.title}
                  </li>
                </Link>
              </ul>
            );
          })}
      </nav>
    </header>
  );
};

export default Header;

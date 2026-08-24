"use client";

import { useMenus } from "@/hooks/useMenus";
import Image from "next/image";
import { useState } from "react";

interface MenuNavigationType {
  title: string;
}

const menuNavigation: MenuNavigationType[] = [
  {
    title: "coffee",
  },
  {
    title: "non-coffee",
  },
  {
    title: "tea",
  },
  {
    title: "snack",
  },
  {
    title: "food",
  },
];

const MenuSection = () => {
  const [isActive, setIsActive] = useState("coffee");

  const { data, isLoading } = useMenus();

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <p>Loading menus...</p>
      </div>
    );
  }

  function handleActiveMenu(title: string) {
    setIsActive(title);
  }

  const filterMenu = data?.data.filter(
    (item: { category: string }) => item.category === isActive,
  );

  return (
    <section className="w-full">
      <div className="w-full py-6 p-4">
        <h3 className="text-center font-bold text-slate-700 text-2xl uppercase">
          Daftar Menu
        </h3>

        {/* start navigation menu */}
        <nav className="w-full p-4">
          <ul className="flex items-center gap-x-4 overflow-x-auto">
            {menuNavigation.length > 0 &&
              menuNavigation.map((item, index) => {
                return (
                  <li key={index} className="py-4">
                    <button
                      className={`px-4 py-2 rounded-full ${isActive === item.title ? "bg-orange-400 text-white" : "bg-gray-100 text-slate-700"} font-semibold hover:bg-orange-400 hover:text-white transition-colors duration-300 cursor-pointer uppercase whitespace-nowrap `}
                      onClick={() => handleActiveMenu(item.title)}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
          </ul>
        </nav>
        {/* end navigation menu */}
        {/* start menu items */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filterMenu && filterMenu?.length > 0 ? (
            filterMenu?.map((item: MenusListType, index: number) => {
              return (
                <div key={index} className="border-b border-gray-200 p-4">
                  <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover cursor-pointer object-center transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                    <h4 className="font-semibold text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="font-bold text-xl">
                      Rp {item.price.toLocaleString()}
                    </p>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Menu not found</p>
          )}
        </div>

        {/* end menu items */}
      </div>
    </section>
  );
};

export default MenuSection;

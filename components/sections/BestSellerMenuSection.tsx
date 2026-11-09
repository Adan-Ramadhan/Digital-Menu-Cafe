"use client"

import { useMenus } from "@/hooks/useMenus";
import Image from "next/image";
import MenuCard from "../MenuCard";

const BestSellerMenuSection = () => {
  const { data, isLoading } = useMenus();

  const bestSellerMenu = data?.data.filter(
    (item: { isBestSeller: boolean }) => item.isBestSeller,
  );

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <p>Loading best seller menus...</p>
      </div>
    );
  }

  return (
    <section className="w-full ">
      <div className="w-full py-6 p-4">
        <h3 className="text-left mb-2 font-bold text-slate-700 text-2xl uppercase">
          Best Seller
        </h3>
        <div className="w-20 h-1 bg-orange-400"></div>

        {/* start menu items */}

        <div className="w-full flex p-4 gap-x-4 overflow-x-auto ">
          {bestSellerMenu && bestSellerMenu?.length > 0 ? (
            bestSellerMenu?.map((item: MenusListType, index: number) => {
              return (
                <div key={item.id} className="shrink-0 w-full md:shrink">
                  <MenuCard menu={item} index={index} />
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Menu not Avaiable</p>
          )}
        </div>

        {/* end menu items */}
      </div>
    </section>
  );
};

export default BestSellerMenuSection;

"use client";

import { useMenus } from "@/hooks/useMenus";
import Image from "next/image";
import MenuCard from "../MenuCard";
import { Skeleton } from "../ui/skeleton";

const BestSellerMenuSection = () => {
  const { data, isLoading } = useMenus();

  const bestSellerMenu = data?.data.filter(
    (item: { isBestSeller: boolean }) => item.isBestSeller,
  );

  if (isLoading) {
    return (
      <div className="w-full h-75 overflow-hidden relative flex items-center justify-center flex-wrap gap-3">
        <Skeleton className="h-32 w-75 rounded-lg" />
        <Skeleton className="h-32 w-75 rounded-lg" />
        <Skeleton className="h-32 w-75 rounded-lg" />
        <Skeleton className="h-32 w-75 rounded-lg" />
      </div>
    );
  }

  return (
    <section className="w-full overflow-hidden relative">
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

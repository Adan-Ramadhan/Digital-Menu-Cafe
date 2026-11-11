"use client";
import { useMenus } from "@/hooks/useMenus";
import { useState } from "react";
import MenuCard from "../MenuCard";
import { Skeleton } from "../ui/skeleton";

const SearchSection = () => {
  const [isSearch, setIsSearch] = useState<string>("");

  const { data, isLoading } = useMenus();

  const menus = data?.data ?? [];

  const filtredMenus = isSearch
    ? menus.filter((item) =>
        item.title.toLowerCase().includes(isSearch.toLowerCase()),
      )
    : [];

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
    <section className="w-full min-h-auto overflow-hidden relative">
      <div className="w-full pt-20 py-6 p-4 ">
        <h3 className="text-center mb-2 font-bold text-slate-700 text-2xl uppercase">
          Search <span className="text-amber-600">Menus</span> Here
        </h3>

        <div className="mx-auto w-3/4 mb-5">
          <input
            type="text"
            placeholder="search menus..."
            value={isSearch}
            onChange={(e) => setIsSearch(e.target.value)}
            className="w-full border rounded-full border-gray-300 px-4 py-2"
          />
        </div>

        {/* start menu items */}
        <div className="w-full ">
          {!isSearch ? (
            <p className="text-center text-gray-500">
              Search your favorite menu
            </p>
          ) : filtredMenus.length > 0 ? (
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 place-items-center">
              {filtredMenus.map((item: MenusListType, index) => (
                <MenuCard key={item.id} menu={item} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Sorry menu not found</p>
          )}
        </div>
        {/* end menu items */}
      </div>
    </section>
  );
};

export default SearchSection;

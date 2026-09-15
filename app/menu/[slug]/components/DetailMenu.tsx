"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMenu } from "@/hooks/useMenus";
import Image from "next/image";
import { useParams } from "next/navigation";
// icons
import { FaCartPlus } from "react-icons/fa";

const DetailMenu = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const { data, isLoading } = useMenu(slug);
  if (isLoading) return <p>Loading data...</p>;
  const { title, image, description, price, stock } = data as MenusListType;

  const isOutOfStock = (stock ?? 0) === 0;
  const isLowOfStock = (stock ?? 0) > 0 && (stock ?? 0) <= 10;

  const handleAddToCart = () => {
    console.log("Added To Cart:", "Name:", title, "Price:", price);
  };

  return (
    <div className="w-full ">
      <div className="w-full py-6 p-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {image && (
            <div className="w-full  rounded-xl h-72 relative overflow-hidden">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          )}

          {/* start menu content */}
          <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
            <div className="w-full flex justify-between">
              <h3 className="font-bold  text-2xl">{title}</h3>
              {/* start stock status badge */}
              {isOutOfStock ? (
                <Badge variant={"destructive"} className="shrink-0">
                  Sold Out
                </Badge>
              ) : isLowOfStock ? (
                <Badge variant={"secondary"} className="shrink-0">
                  {stock} Item Left
                </Badge>
              ) : (
                <Badge className="shrink-0 bg-green-500">Avaiable</Badge>
              )}
              {/* end stock status badge */}
            </div>
            <h3 className="font-bold  text-2xl ">Rp{price.toLocaleString()}</h3>
            <p className="font-normal text-md mt-3 text-slate-500">
              {description}
            </p>
            <Button
              disabled={isOutOfStock}
              onClick={handleAddToCart}
              className="bg-orange-400 hover:bg-amber-600 transition-colors duration-300 cursor-pointer mt-3 rounded-full px-6 py-2 font-semibold text-white flex items-center gap-3"
            >
              {isOutOfStock ? "Sold Out" : "Add to Cart"}
              <FaCartPlus />
            </Button>
          </div>
          {/* end menu content */}
        </div>
      </div>
    </div>
  );
};

export default DetailMenu;

import { useMenus } from "@/hooks/useMenus";
import Image from "next/image";

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

        <div className="w-full flex p-4 gap-x-4 overflow-x-auto">
          {bestSellerMenu && bestSellerMenu?.length > 0 ? (
            bestSellerMenu?.map((item: MenusListType, index: number) => {
              return (
                <div key={index} className="w-72 shrink-0 border-b border-gray-200 p-4">
                  <div className=" h-64 relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover cursor-pointer object-center transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h4 className="font-semibold text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                    {item.title}
                  </h4>
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

export default BestSellerMenuSection;

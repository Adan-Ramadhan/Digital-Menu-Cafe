"use client"

import Skeleton from "@/components/Skeleton"
import { useMenu } from "@/hooks/useMenus"
import Image from "next/image"
import { useParams } from "next/navigation"

const DetailMenu = () => {

    const params = useParams<{ slug: string }>()

    const slug = params.slug


    const { data, isLoading } = useMenu(slug)

    if (isLoading) return <p>Loading data...</p>

    const { title, image, description, price } = data as MenusListType

    return (
        <div className="w-full ">
            <div className="w-full py-6 p-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full  rounded-xl h-72 relative overflow-hidden">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>

                    {/* start menu content */}
                    <div className="w-full rounded-xl border border-gray-200 bg-white p-4">
                        <h3 className="font-bold  text-2xl">{title}</h3>
                        <h3 className="font-bold  text-2xl ">Rp{price.toLocaleString()}</h3>
                        <p className="font-normal text-md mt-3 text-slate-500">{description}</p>
                        <button className="bg-orange-400 hover:bg-amber-600 transition-colors duration-300 cursor-pointer mt-3 rounded-full px-6 py-2 font-semibold text-white">Add to Cart</button>
                    </div>
                    {/* end menu content */}
                </div>
            </div>
        </div>
    )
}

export default DetailMenu
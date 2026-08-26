"use client"

import { useMenu } from "@/hooks/useMenus"
import Image from "next/image"
import { useParams } from "next/navigation"

const DetailMenu = () => {

    const params = useParams<{ slug: string }>()

    const slug = params.slug


    const { data } = useMenu(slug)


    return (
        <div className="w-full ">
            <div className="w-full h-64 relative overflow-hidden">
                <Image src={data?.image} alt={data?.title} width={500} height={500} className="object-cover object-center" />
            </div>

            {/* start menu content */}

            <div className="w-full rounded-t-lg mt-4 bg-white">
                <h3 className="font-bold text-center text-2xl">{data?.title}</h3>
            <p></p>
            </div>
            {/* end menu content */}
        </div>
    )
}

export default DetailMenu
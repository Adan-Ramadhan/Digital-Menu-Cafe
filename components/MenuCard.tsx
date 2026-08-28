import Image from "next/image"
import Link from "next/link"


interface menuProp {
    menu: MenusListType
    index: number
}

const MenuCard = ({ menu, index }: menuProp) => {

    const { slug, title, description, image, price } = menu


    return (
        <div key={index} className="w-full md:w-72 border-b shrink-0 border-gray-200 p-4">
            <Link href={`/menu/${slug}`}>
                <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover cursor-pointer object-center transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <h4 className="font-semibold text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">{title}</h4>
                <p className="text-gray-600">{description}</p>
                <p className="font-bold text-xl">
                    Rp {price.toLocaleString()}
                </p>
            </Link>
        </div>
    )
}

export default MenuCard
import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full p-4 bg-amber-800">
            <nav className="flex justify-between items-center">
                <Link href={"/"}>
                    <h3 className="uppercase text-white font-bold">Digital Menu Cafe</h3>
                </Link>
                <button className="rounded-full px-6 cursor-pointer py-2 hover:bg-amber-600 transition-colors duration-300 bg-orange-400 text-white font-semibold">Order Now</button>
            </nav>
        </header>
    )
}


export default Header
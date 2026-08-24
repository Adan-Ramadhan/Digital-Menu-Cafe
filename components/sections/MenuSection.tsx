import { useMenus } from "@/hooks/useMenus"
import { title } from "process"

interface MenuNavigationType {
    title: string
}

const menuNavigation: MenuNavigationType[] = [
    {
        title: "coffee"
    },
    {
        title: "non-coffee"
    },
    {
        title: "tea"
    },
    {
        title: "snack"
    },
    {
        title: "food"
    },
]


const MenuSection = () => {

    const { data } = useMenus()

    console.log("Data dari useMenu:", data)

    // const filterListMenus = 


    return (
        <section className="w-full">
            <div className="w-full py-4">
                <h3 className="text-center font-semibold text-slate-700 text-2xl uppercase">Daftar Menu</h3>

                {/* start navigation menu */}
                <nav className="w-full p-4">
                    <ul className="flex items-center gap-x-4 overflow-x-auto">
                        {menuNavigation.length > 0 && menuNavigation.map((item, index) => {
                            return (
                                <li key={index}>
                                    <button >
                                        {item.title}
                                    </button>

                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {/* end navigation menu */}
            </div>
        </section>
    )
}

export default MenuSection
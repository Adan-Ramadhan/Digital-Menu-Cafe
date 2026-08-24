import dataMenus from "../data/menus.json"

class menusServices {

    static async getMenus(): Promise<MenusResponseType | undefined> {
        try {

            console.log("Data menu dari services:", dataMenus)

            return dataMenus
        } catch (error) {
            if (error instanceof Error) {
                console.error(error);
                throw new Error(error.message);
            }
        }
    }
}


export default menusServices
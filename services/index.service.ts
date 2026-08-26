import dataMenus from "../data/menus.json";

class menusServices {
  static async getMenus(): Promise<MenusResponseType> {
    try {
      return dataMenus;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getMenuSlug(slug: string): Promise<MenusListType | undefined> {
    try {
      const menu = await dataMenus.data.find(item => item.slug === slug)


      return menu
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default menusServices;

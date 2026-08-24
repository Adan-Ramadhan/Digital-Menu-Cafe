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
}

export default menusServices;

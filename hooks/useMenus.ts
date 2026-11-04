import menusServices from "@/services/index.service";
import { useQuery } from "@tanstack/react-query";

export const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const menus = await menusServices.getMenus()
      return menus
    },
  });
};


export const useMenu = (slug: string) => {
  return useQuery({
    queryKey: ["menu", slug],
    queryFn: async () => {
      const menu = await menusServices.getMenuSlug(slug)
      return menu
    }
  })
}
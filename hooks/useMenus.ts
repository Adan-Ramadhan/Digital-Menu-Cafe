import menusServices from "@/services/index.service";
import { useQuery } from "@tanstack/react-query";

export const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const menus = await menusServices.getMenus();
      return menus;
    },
  });
};

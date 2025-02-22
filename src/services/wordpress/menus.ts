import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import getApiUrl from "@/utils/getApiUrl";
import globalFetch from "@/utils/globalFetch";

type MenuType = "navigation" | "catalog" | "footerMenus";
const getMenuData = async (
  menu: MenuType,
  subdomain: string,
  isNotEmpty?: boolean,
): Promise<MenuItem[] | null> => {
  const MENUS_ID: Record<MenuType, string> = {
    // navigation: "5304",
    navigation: "653",
    catalog: "752",
    footerMenus: "753",
    // catalog: "865",
    // footerCatalog: "17907",
    // footerMenus: "21220",
  };

  if (!Object.keys(MENUS_ID).includes(menu)) {
    console.error("Такой ID не существует в кастомных WordPress Меню");
    return [];
  }

  const menuId = MENUS_ID[menu];
  const pathName = `/wp-json/menus/v1/menu/${menuId}${isNotEmpty ? `?isEmpty=false` : ""}`;
  const url = getApiUrl(subdomain, pathName);

  try {
    const response = await globalFetch(url);
    const data = await response.json();

    return menu === "catalog" ? data[0].children : data;
  } catch (error) {
    console.error(`Ошибка! Запрос данных WordPress Меню: ${menu}\n${error}`);

    return null;
  }
};

export default getMenuData;

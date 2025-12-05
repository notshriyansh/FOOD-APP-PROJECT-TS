import { useState, useEffect } from "react";
import { Menu_URL } from "./constants";

const useRestaurantMenu = (resId?: string | undefined) => {
  const [menuData, setMenuData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    setMenuData(json);
  };
  return menuData;
};

export default useRestaurantMenu;

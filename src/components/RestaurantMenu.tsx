import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();
  const menuData = useRestaurantMenu(resId);

  if (!menuData) return <Shimmer />;

  const restaurantName = menuData?.data?.cards?.[0]?.card?.card?.text;

  const categories =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>

      {categories.map((category: any, index: number) => {
        const card = category.card?.card;

        if (card?.itemCards) {
          return (
            <div key={index}>
              <h2>{card.title}</h2>
              <ul>
                {card.itemCards.map((item: any) => (
                  <li key={item.card.info.id}>
                    {item.card.info.name} - ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RestaurantMenu;

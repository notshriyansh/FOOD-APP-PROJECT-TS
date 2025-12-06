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
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        {restaurantName}
      </h1>

      <div className="space-y-8">
        {categories.map((category: any, index: number) => {
          const card = category.card?.card;

          if (card?.itemCards) {
            return (
              <div
                key={index}
                className="bg-white p-6 shadow rounded-xl space-y-4"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  {card.title}
                </h2>
                <ul className="space-y-2">
                  {card.itemCards.map((item: any) => (
                    <li
                      key={item.card.info.id}
                      className="flex justify-between text-lg text-gray-700 border-b pb-2"
                    >
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
    </div>
  );
};

export default RestaurantMenu;

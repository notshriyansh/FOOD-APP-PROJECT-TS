import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();
  const menuData = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (!menuData) return <Shimmer />;

  const restaurantName = menuData?.data?.cards?.[0]?.card?.card?.text;

  const categories =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const typeCategories =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        {restaurantName}
      </h1>

      <div className="space-y-8">
        {typeCategories.map((category: any, index: number) => {
          const card = category.card.card;
          return (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                <span className="font-semibold">{card.title}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 space-y-2">
                  {card.itemCards?.map((item: any) => (
                    <div
                      key={item.card.info.id}
                      className="flex justify-between border-b pb-2"
                    >
                      <span>{item.card.info.name}</span>
                      <span>
                        ₹
                        {(item.card.info.price || item.card.info.defaultPrice) /
                          100}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

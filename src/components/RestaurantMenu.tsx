import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();
  const menuData = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const dispatch = useAppDispatch();

  if (!menuData) return <Shimmer />;

  const restaurantName =
    menuData?.data?.cards?.[0]?.card?.card?.text ||
    menuData?.data?.cards?.[2]?.card?.card?.info?.name;

  const categories =
    menuData?.data?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCategories = categories.filter(
    (cat) => cat.card?.card?.itemCards || cat.card?.card?.categories
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{restaurantName}</h1>

      {itemCategories.map((category, idx) => {
        const catData = category.card.card;
        const title = catData.title;

        const items =
          catData.itemCards ||
          catData.categories?.flatMap((c) => c.itemCards) ||
          [];

        return (
          <div key={idx} className="border rounded-lg shadow-sm mb-3 bg-white">
            <div
              className="p-4 cursor-pointer flex justify-between items-center bg-gray-100"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <span>{openIndex === idx ? "🔽" : "▶️"}</span>
            </div>

            {openIndex === idx && (
              <div className="p-4 space-y-4">
                {items.map((itemObj) => {
                  const item = itemObj.card.info;
                  const isAdded = addedItems[item.id] || false;

                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-start border-b pb-3"
                    >
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          ₹{item.price / 100 || item.defaultPrice / 100}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {item.description}
                        </p>

                        <button
                          className={`mt-2 px-3 py-1 rounded-md text-white transition-all duration-300
                            ${
                              isAdded
                                ? "bg-green-600 scale-105"
                                : "bg-red-500 hover:bg-red-600"
                            }
                          `}
                          onClick={() => {
                            dispatch(
                              addToCart({
                                id: item.id,
                                name: item.name,
                                price: (item.price || item.defaultPrice) / 100,
                                quantity: 1,
                              })
                            );

                            setAddedItems((prev) => ({
                              ...prev,
                              [item.id]: true,
                            }));

                            setTimeout(() => {
                              setAddedItems((prev) => ({
                                ...prev,
                                [item.id]: false,
                              }));
                            }, 800);
                          }}
                        >
                          {isAdded ? "✓ Added" : "Add to Cart"}
                        </button>
                      </div>

                      <img
                        src={
                          item.imageId
                            ? CDN_URL + item.imageId
                            : "https://via.placeholder.com/120"
                        }
                        className="w-28 h-28 object-cover rounded-lg ml-3"
                        alt={item.name}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

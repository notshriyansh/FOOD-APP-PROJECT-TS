import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../utils/types";

interface RestaurantCardProps {
  resData: Restaurant;
}

const RestaurantCard = ({ resData }: RestaurantCardProps) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 h-full flex flex-col">
      <img
        className="w-full h-40 object-cover"
        alt={name}
        src={
          cloudinaryImageId
            ? CDN_URL + cloudinaryImageId
            : "https://via.placeholder.com/300?text=No+Image"
        }
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">{cuisines?.join(", ")}</p>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>{avgRating} 🌟</span>
          <span>{costForTwo}</span>
          <span>{sla?.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

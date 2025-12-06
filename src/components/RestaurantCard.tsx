import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../utils/types";

interface RestaurantCardProps {
  resData: Restaurant;
}

const RestaurantCard = ({ resData }: RestaurantCardProps) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
      <img
        className="rounded-xl h-40 w-full object-cover mb-3"
        alt={name}
        src={
          cloudinaryImageId
            ? CDN_URL + cloudinaryImageId
            : "https://via.placeholder.com/200?text=No+Image"
        }
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{cuisines?.join(", ")}</p>
      <div className="text-sm text-gray-500">
        <span>{avgRating} stars</span>
        <span>{costForTwo}</span>
        <span>{sla?.deliveryTime} minutes</span>
      </div>
    </div>
  );
};

export default RestaurantCard;

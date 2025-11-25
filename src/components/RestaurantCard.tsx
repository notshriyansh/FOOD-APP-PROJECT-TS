import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../utils/types";

interface RestaurantCardProps {
  resData: Restaurant;
}

const RestaurantCard = ({ resData }: RestaurantCardProps) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={name}
        src={
          cloudinaryImageId
            ? CDN_URL + cloudinaryImageId
            : "https://via.placeholder.com/200?text=No+Image"
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Restaurant, ApiResponse } from "../utils/types";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json: ApiResponse = await data.json();

    const restaurants =
      json?.data?.cards?.find(
        (card: any) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants.map((r: any) => r.info));
    setFilteredRestaurants(restaurants.map((r: any) => r.info));
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1 className="text-center text-xl py-20">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex w-full sm:w-1/2 gap-2">
          <input
            type="text"
            className="flex-1 border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-orange-300 outline-none"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.id}
            key={restaurant.id}
            className="block"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

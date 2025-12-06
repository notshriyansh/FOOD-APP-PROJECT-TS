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

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1 className="text-center mt-20 text-red-500 font-bold">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 md:px-8 mt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            onClick={handleSearch}
            className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

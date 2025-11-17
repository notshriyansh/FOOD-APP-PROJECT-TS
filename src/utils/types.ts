export interface RestaurantData {
  id: string;
  cloudinaryImageId: string;
  name: string;
  avgRating: number;
  cuisines: string[];
  costForTwo: number;
  deliveryTime: number;
}

export interface Restaurant {
  data: RestaurantData;
}

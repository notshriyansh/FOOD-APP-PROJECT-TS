export interface RestaurantSla {
  deliveryTime: number;
}

export interface Restaurant {
  id: string;
  name: string;
  avgRating: number;
  cuisines: string[];
  costForTwo: string;
  cloudinaryImageId: string;
  sla: RestaurantSla;
}

export interface ApiRestaurantResponse {
  info: Restaurant;
}

export interface ApiResponse {
  data: {
    cards: {
      card?: {
        card?: {
          gridElements?: {
            infoWithStyle?: {
              restaurants: ApiRestaurantResponse[];
            };
          };
        };
      };
    }[];
  };
}

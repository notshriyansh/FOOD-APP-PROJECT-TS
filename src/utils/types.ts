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

export interface ItemInfo {
  id: string;
  name: string;
  price?: number;
  defaultPrice?: number;
}

export interface ItemCard {
  card: {
    info: ItemInfo;
  };
}

export interface CategoryCard {
  card?: {
    card?: {
      title?: string;
      itemCard?: ItemCard[];
    };
  };
}

export interface RestaurantMenuResponse {
  data?: {
    cards?: any[];
  };
}

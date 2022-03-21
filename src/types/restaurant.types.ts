export interface IRestaurantRaw {
  name: string;
  imageUrl: string;
  rating: number;
  price: string;
  transactions: string[];
}

export interface IRestaurant {
  name: string;
  images: string[];
  rating: number;
  price: string;
  transactions: string[];
}

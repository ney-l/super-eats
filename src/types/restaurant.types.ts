export interface IRestaurant {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  categories: [{ title: string }];
  price: string;
  transactions: string[];
}

export interface IMenuItem {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

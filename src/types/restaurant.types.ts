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

export interface IRestaurant {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  categories: [{ title: string }];
  price: string;
  transactions: string[];
  location: {
    address1: string;
    city: string;
  };
}

export interface IMenuItem {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

export interface IOrder {
  restaurant: IRestaurant;
  selectedItems: {
    description: string;
    id: string;
    image: string;
    price: string;
    title: string;
    quantity: number;
    size: string;
  }[];
  status: string;
  createdAt: string;
}

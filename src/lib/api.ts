import camelcase from 'lodash.camelcase';
import transform from 'lodash.transform';
import { yelpAPIKey } from '../config/keys';
import { IRestaurant } from '../types/restaurant.types';

const transformRestaurants = (data) =>
  data
    .map((item) =>
      transform(item, (result, val: any, key: string) => {
        result[camelcase(key)] = val;
      })
    )
    .filter((item) => item.imageUrl)
    .map((item) => ({
      name: item.name,
      id: item.name,
      images: [item.imageUrl],
      rating: item.rating,
      price: item.price,
      transactions: item.transactions,
    }));

export const getRestaurants = (city: string): Promise<IRestaurant[]> => {
  const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  const options = {
    headers: {
      Authorization: `Bearer ${yelpAPIKey}`,
    },
  };

  return fetch(url, options)
    .then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        Promise.reject(data);
      }
      return transformRestaurants(data.businesses);
    })
    .catch((err) => Promise.reject(err.message));
};

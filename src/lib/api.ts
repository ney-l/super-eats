import camelcase from 'lodash.camelcase';
import transform from 'lodash.transform';

import { yelpAPIKey } from '../config';
import { IRestaurant } from '../types';

const transformRestaurants = (data) =>
  data
    .map((item) =>
      transform(item, (result, val: any, key: string) => {
        result[camelcase(key)] = val;
      })
    )
    // only want restaurants with images
    .filter((item) => item.imageUrl)
    .map((item) => ({
      id: item.id,
      imageUrl: item.imageUrl,
      name: item.name,
      price: item.price,
      rating: item.rating,
      reviewCount: item.reviewCount,
      categories: item.categories,
      transactions: item.transactions,
    }));

export const getRestaurants = async (
  city: string = 'Muelheim'
): Promise<{ restaurants: IRestaurant[]; error: string }> => {
  if (!city) {
    return {
      error: 'Location required',
      restaurants: [],
    };
  }
  const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const options = {
    headers: {
      Authorization: `Bearer ${yelpAPIKey}`,
    },
  };

  const response = await fetch(url, options);

  const data = await response.json();

  if (!response.ok) {
    console.error('something went wrong fetching restaurants: ');
    console.error(data);
    return { error: data.error?.description, restaurants: [] };
  }

  return {
    error: '',
    restaurants: transformRestaurants(data.businesses),
  };
};

import React from 'react';
import * as Api from '../lib/api';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    Api.getRestaurants().then((data) => setRestaurants(data));
  }, []);

  return {
    restaurants,
  };
};

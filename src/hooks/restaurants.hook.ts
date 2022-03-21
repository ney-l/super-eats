import React from 'react';
import * as Api from '../lib/api';
import { IRestaurant } from '../types/restaurant.types';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = React.useState<IRestaurant[]>([]);
  const [city, setCity] = React.useState('Mülheim');
  const [activeTab, setActiveTab] = React.useState('delivery');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onCityChange = (city: string) => setCity(city);
  const onTabChange = (tab: string) => setActiveTab(tab.toLowerCase());

  React.useEffect(() => {
    console.log('fetching data');
    setIsLoading(true);
    Api.getRestaurants(city)
      .then((data) =>
        setRestaurants(
          data.filter((restaurant) => {
            // @todo: fix this later
            // console.log(restaurant.transactions.includes(activeTab));
            // console.log(restaurant.transactions, activeTab);
            // return restaurant.transactions.includes(activeTab);
            return restaurant;
          })
        )
      )
      .catch((err) => {
        console.log('err: ', err.message);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [city, activeTab]);

  return {
    restaurants,
    onCityChange,
    activeTab,
    onTabChange,
    error,
    isLoading,
  };
};

// Voter Id: Rukmani
// Aadhar Card: Rakmani
// Pan card: Rak
// Moolniwasi: R

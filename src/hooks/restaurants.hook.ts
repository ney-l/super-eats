import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import * as Api from '../lib/api';
import { IRestaurant } from '../types/restaurant.types';

const DEFAULT_CITY_NAME = 'Muelheim';

// this needs to provide name of user's current city and status - granted, denied, unknown
const getCurrentCity = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      // get lat and long
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      // get the current city name
      const [address] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      return { error: null, city: address?.city };
    }

    return { error: null, city: DEFAULT_CITY_NAME };
  } catch (err) {
    console.error('Error occured: ', err.message, err.stack);
    return { error: err.message, city: '' };
  }
};

function useCurrentLocation() {
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [city, setCity] = useState<null | string>('');

  useEffect(() => {
    getCurrentCity().then(({ error, city: cityName }) => {
      setErrorMsg(error);
      setCity(cityName);
    });
  }, []);

  return {
    error: errorMsg,
    city,
    setCity,
  };
}

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const { city, setCity, error: locationError } = useCurrentLocation();

  const [activeTab, setActiveTab] = useState('delivery');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (locationError) {
      setError(locationError);
    }
  }, [locationError]);

  const onCityChange = (city: string) => setCity(city);
  const onTabChange = (tab: string) => setActiveTab(tab.toLowerCase());

  const loadData = async () => {
    const { restaurants, error } = await Api.getRestaurants(city);
    setRestaurants(restaurants);
    setError(error);
  };

  const reset = () => setError('');

  useEffect(() => {
    reset();

    if (!city) return;

    setIsLoading(true);
    loadData()
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [city, activeTab]);

  return {
    restaurants,
    onCityChange,
    activeTab,
    onTabChange,
    error,
    isLoading,
    city,
  };
};
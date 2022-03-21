import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import * as Api from '../lib/api';
import { IRestaurant } from '../types/restaurant.types';

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState('');

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location?.coords?.latitude, location?.coords?.longitude);

    setLocation(location);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocationName = async (location) => {
    const { latitude, longitude } = location.coords;

    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    setCity(response[0].city);
  };

  useEffect(() => {
    if (!location) return;

    getCurrentLocationName(location);
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return {
    error: errorMsg,
    lat: location?.coords?.latitude,
    lng: location?.coords?.longitude,
    city, // @todo remove
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

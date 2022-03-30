import { StyleSheet, View } from 'react-native';
import React from 'react';

import { IRestaurant } from '../../types';
import { RestaurantsEmptyState } from './EmptyState';
import { Restaurant } from './Restaurant';

export const Restaurants = ({
  restaurants,
  onRestaurantClick,
  isNotFound,
  notFoundText,
}: {
  restaurants: IRestaurant[] | [];
  onRestaurantClick: (restaurant: IRestaurant) => void;
  isNotFound: boolean;
  notFoundText: string;
}) => {
  if (isNotFound) {
    return <RestaurantsEmptyState isShow={isNotFound} text={notFoundText} />;
  }

  return (
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
          onRestaurantClick={onRestaurantClick}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});

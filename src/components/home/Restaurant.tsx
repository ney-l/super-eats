import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { IRestaurant, useAppDispatch, useAppSelector } from '../../types';
import { addFavorite } from '../../store/features/restaurantsSlice';
import { RestaurantImage } from './RestaurantImage';
import { RestaurantInfo } from './RestaurantInfo';

export const Restaurant = ({
  restaurant,
  onRestaurantClick,
}: {
  restaurant: IRestaurant;
  onRestaurantClick: (restaurant: IRestaurant) => void;
}) => {
  const dispatch = useAppDispatch();
  const favRestaurants = useAppSelector((state) => state.restaurants);

  const isFavorite = favRestaurants.some((res) => res.id === restaurant.id);

  const onFavoritePress = () => {
    dispatch(addFavorite(restaurant));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onRestaurantClick(restaurant)}
    >
      <View style={styles.restaurant}>
        <RestaurantImage
          imageUrl={restaurant.imageUrl}
          onFavoritePress={onFavoritePress}
          isFavorite={isFavorite}
        />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    marginTop: 10,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
});

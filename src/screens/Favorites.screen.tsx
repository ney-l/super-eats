import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaWrapper } from '../components/layout';
import { IRestaurant, useAppDispatch, useAppSelector } from '../types';
import { Restaurants } from '../components/home';
import { clearCart } from '../store/features/cartSlice';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';
import { ContinueButton } from '../components/auth/ContinueButton';

export const Favorites = ({
  navigation,
}: StackScreenProps<StackParams, 'Favorites'>) => {
  const restaurants = useAppSelector((state) => state.restaurants);
  const { id } = useAppSelector((state) => state.cart.restaurant);

  const dispatch = useAppDispatch();

  const goToRestaurantScreen = (restaurant: IRestaurant) => {
    if (id !== restaurant.id) {
      dispatch(clearCart());
    }

    navigation.navigate('Restaurant', { restaurant });
  };

  const handlePress = () => {
    navigation.navigate('Home', { screen: 'HomeTab' });
  };
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Restaurants
          restaurants={restaurants}
          notFoundText="No favorite restaurants added yet"
          isNotFound={restaurants.length == 0}
          onRestaurantClick={goToRestaurantScreen}
        />
        {restaurants.length === 0 && (
          <View style={{ margin: 30, flex: 1 }}>
            <ContinueButton onPress={handlePress} text="Browse Restaurants" />
          </View>
        )}
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});

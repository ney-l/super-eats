import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';

import { HeaderTabs, BottomTabs } from '../components/layout';
import { Restaurants, SearchBar, Categories } from '../components/home';
import { useRestaurants } from '../hooks';
import { StackParams } from '../navigation';
import { IRestaurant, useAppDispatch, useAppSelector } from '../types';
import { clearCart } from '../store/features/cartSlice';
import FullScreenLoader from '../components/layout/FullScreenLoader';

export function HomeScreen({
  navigation,
}: StackScreenProps<StackParams, 'Home'>) {
  const {
    isLoading,
    restaurants,
    onCityChange,
    activeTab,
    onTabChange,
    city,
    categoryId,
    onCategoryChange,
    isNotFound,
  } = useRestaurants();

  const { id } = useAppSelector((state) => state.cart.restaurant);
  const dispatch = useAppDispatch();
  const goToRestaurantScreen = (restaurant: IRestaurant) => {
    if (id !== restaurant.id) {
      dispatch(clearCart());
    }
    navigation.navigate('Restaurant', { restaurant });
  };

  const fetchCategory = (id: string) => {
    onCategoryChange(id);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />

        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <HeaderTabs activeTab={activeTab} onTabChange={onTabChange} />
            <SearchBar city={city} onCityChange={onCityChange} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories
              selectedId={categoryId}
              onCategoryPress={fetchCategory}
            />

            <Restaurants
              restaurants={restaurants}
              onRestaurantClick={goToRestaurantScreen}
              isNotFound={isNotFound}
            />
          </ScrollView>
          <Divider width={1} />
          {isLoading && <FullScreenLoader isLight={true} />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  innerContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    padding: 15,
  },
});

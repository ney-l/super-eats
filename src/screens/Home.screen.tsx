import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';

import { HeaderTabs, Error, BottomTabs, Spinner } from '../components/layout';
import { Restaurants, SearchBar, Categories } from '../components/home';
import { useRestaurants } from '../hooks';
import { StackParams } from '../navigation';
import { IRestaurant } from '../types';

export function HomeScreen({
  navigation,
}: StackScreenProps<StackParams, 'Home'>) {
  const {
    isLoading,
    error,
    restaurants,
    onCityChange,
    activeTab,
    onTabChange,
    city,
  } = useRestaurants();

  const goToRestaurantScreen = (restaurant: IRestaurant) =>
    navigation.navigate('Restaurant', { restaurant });

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
            <Categories />
            <Error error={error} />
            <Spinner isLoading={isLoading} />
            <Restaurants
              restaurants={restaurants}
              onRestaurantClick={goToRestaurantScreen}
            />
          </ScrollView>
          <Divider width={1} />
          <BottomTabs />
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

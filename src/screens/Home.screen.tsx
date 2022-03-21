import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Categories } from '../components/Categories';
import { HeaderTabs } from '../components/layout';
import { Error } from '../components/layout';
import { Spinner } from '../components/layout/Spinner';
import { Restaurants } from '../components/Restaurants';
import { SearchBar } from '../components/SearchBar';
import { useRestaurants } from '../hooks/restaurants.hook';

export function HomeScreen() {
  const {
    isLoading,
    error,
    restaurants,
    onCityChange,
    activeTab,
    onTabChange,
  } = useRestaurants();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} onTabChange={onTabChange} />
        <SearchBar onCityChange={onCityChange} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Error error={error} />
        <Spinner isLoading={isLoading} />
        <Restaurants restaurants={restaurants} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

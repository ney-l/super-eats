import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { HeaderTabs, Error, BottomTabs, Spinner } from '../components/layout';
import { Restaurants, SearchBar, Categories } from '../components/home';
import { useRestaurants } from '../hooks';
import { Divider } from 'react-native-elements';

export function HomeScreen() {
  const {
    isLoading,
    error,
    restaurants,
    onCityChange,
    activeTab,
    onTabChange,
    city,
  } = useRestaurants();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} onTabChange={onTabChange} />
        <SearchBar city={city} onCityChange={onCityChange} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Error error={error} />
        <Spinner isLoading={isLoading} />
        <Restaurants restaurants={restaurants} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

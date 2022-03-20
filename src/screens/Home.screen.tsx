import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Categories } from '../components/Categories';
import { HeaderTabs } from '../components/layout';
import { Restaurants } from '../components/Restaurants';
import { SearchBar } from '../components/SearchBar';
import { useRestaurants } from '../hooks/restaurants';

export function HomeScreen() {
  const { restaurants } = useRestaurants();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
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

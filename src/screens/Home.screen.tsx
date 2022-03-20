import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderTabs } from '../components/layout';
import { SearchBar } from '../components/SearchBar';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

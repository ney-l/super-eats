import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaWrapper } from '../components/layout';
import { Header } from '../components/favorites';

export const Favorites = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Header />
        <Text>Favorites Screen</Text>
        <Text>🏗 Under Construction</Text>
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

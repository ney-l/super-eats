import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { IMenuItem } from '../../types';

export const OrderItem = ({ item }: { item: IMenuItem }) => {
  const { title, price } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    opacity: 0.7,
    fontSize: 16,
  },
});

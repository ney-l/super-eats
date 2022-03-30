import { StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Order } from '../components/orders';
import { useAppSelector } from '../types';
import { Search } from '../components/orders/Search';

export const Orders = () => {
  const orders = useAppSelector((state) => state.orders);
  const [text, setText] = useState('');
  const filteredOrder = orders.filter((order) => {
    if (!text) return order;

    return order.restaurant.name.includes(text);
  });
  return (
    <ScrollView style={styles.container}>
      <Search text={text} onChangeText={setText} />

      {filteredOrder.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },
});

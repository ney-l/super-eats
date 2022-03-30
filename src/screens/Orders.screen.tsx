import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Order } from '../components/orders';
import { useAppSelector } from '../types';

export const Orders = () => {
  const orders = useAppSelector((state) => state.orders);
  console.log(orders);
  return (
    <ScrollView style={styles.container}>
      {orders.map((order) => (
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

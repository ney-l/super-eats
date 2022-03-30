import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Restaurant } from './Restaurant';
import OrderTotal from './OrderTotal';
import OrderItem from './OrderItem';
import { IOrder } from '../../types';

export const Order = ({ order }: { order: IOrder }) => {
  const { selectedItems: items } = order;
  const total = items
    .reduce((acc, curr) => {
      return Number(curr.price.split('$')[1]) + acc;
    }, 0)
    .toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
    });

  const [item] = items;

  return (
    <View style={styles.container}>
      <Restaurant restaurant={order.restaurant} status={order.status} />
      <View style={styles.order}>
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}

        <OrderTotal createdAt={order.createdAt} total={total} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 15,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 2,
    paddingTop: 10,

    backgroundColor: '#FAFAFA',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  order: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

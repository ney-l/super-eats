import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OrderItem = ({
  item,
}: {
  item: {
    quantity: number;
    title: string;
    size: string;
  };
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.quantity}>{item.quantity} x</Text>
        <Text>{item.title}</Text>
      </View>
      <Text style={styles.size}>{item.size}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  quantity: {
    color: '#8A8A8A',
    marginRight: 5,
  },
  size: { color: '#8A8A8A', fontSize: 12, paddingTop: 2 },
});

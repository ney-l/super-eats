import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { OrderItem } from './OrderItem';
import { IMenuItem } from '../../types';

export const OrderPreview = ({
  setModalVisible,
  items,
  total,
  restaurantName,
}: {
  setModalVisible: (bool: boolean) => void;
  items: IMenuItem[];
  total: string;
  restaurantName: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
        <View style={styles.subtotal}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text>{total}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
            <Text style={styles.totalText}>{total}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  checkoutText: { color: 'white', fontSize: 20 },
  totalText: {
    position: 'absolute',
    right: 20,
    color: 'white',
    fontSize: 15,
    top: 17,
  },
});

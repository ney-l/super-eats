import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { IRestaurant, useAppDispatch, useAppSelector } from '../../types';
import { OrderPreview } from './OrderPreview';
import * as Api from '../../lib/api';
import { getFormattedDateTime, getTotalUSD } from '../../utils/formatters.util';
import FullScreenLoader from '../layout/FullScreenLoader';
import { addOrder } from '../../store/features/ordersSlice';

export const ViewCart = ({
  onCheckoutClick,
  restaurant,
}: {
  onCheckoutClick: () => void;
  restaurant: IRestaurant;
}): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { selectedItems: items } = useAppSelector((state) => state.cart);

  const total = getTotalUSD(items);

  const order = {
    id: Date.now() + Math.floor(Math.random() * 100),
    restaurant,
    selectedItems: items.map((item) => ({
      ...item,
      quantity: 1,
      size: 'Regular',
    })),
    status: 'Accepted',
    createdAt: getFormattedDateTime(),
  };

  const saveOrder = async () => {
    await Api.saveOrder({ items, restaurantId: restaurant.id });
    dispatch(addOrder(order));
  };

  const handleCheckoutPress = async () => {
    setLoading(true);
    setModalVisible(false);
    await saveOrder();

    onCheckoutClick();
    setLoading(false);
  };

  if (!items.length) {
    return null;
  }

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <OrderPreview
          onCheckoutPress={handleCheckoutPress}
          items={items}
          total={total}
          restaurantName={restaurant.name}
        />
      </Modal>
      {Boolean(items.length) && (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.total}>{total}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {loading && <FullScreenLoader />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginRight: 30,
  },
  total: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
});

import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';

import { useAppSelector } from '../../types';
import { OrderPreview } from './OrderPreview';
import * as Api from '../../lib/api';
import { getTotalUSD } from '../../utils/formatters.util';
import FullScreenLoader from '../layout/FullScreenLoader';

export const ViewCart = ({
  onCheckoutClick,
}: {
  onCheckoutClick: () => void;
}): JSX.Element | null => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { selectedItems: items, restaurant } = useAppSelector(
    (state) => state.cart
  );

  const total = getTotalUSD(items);

  const saveOrder = async () => {
    const result = await Api.saveOrder({ items, restaurantId: restaurant.id });
    console.log(`Result: `, result);
    return result;
  };

  const handleCheckoutPress = async () => {
    setLoading(true);
    setModalVisible(false);
    await saveOrder();

    onCheckoutClick();
    setLoading(false);
    // setTimeout(() => {
    // }, 2500);
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
    bottom: 130,
    zIndex: 999,
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

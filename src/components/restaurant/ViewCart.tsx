import { View, Text, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppSelector } from '../../types';
import { OrderPreview } from './OrderPreview';

export const ViewCart = (): JSX.Element | null => {
  const [modalVisible, setModalVisible] = useState(false);

  const { selectedItems: items, restaurantName } = useAppSelector(
    (state) => state.cart
  );

  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((acc, current) => acc + current, 0)
    .toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
    });

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
          setModalVisible={(bool: boolean) => setModalVisible(bool)}
          items={items}
          total={total}
          restaurantName={restaurantName}
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

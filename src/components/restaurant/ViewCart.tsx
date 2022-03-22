import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppSelector } from '../../types';

export const ViewCart = (): JSX.Element | null => {
  const items = useAppSelector((state) => state.cart.selectedItems);

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
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>View Cart</Text>
          <Text style={styles.total}>{total}</Text>
        </TouchableOpacity>
      </View>
    </View>
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

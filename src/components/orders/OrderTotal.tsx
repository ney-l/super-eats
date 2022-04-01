import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const OrderTotal = ({
  createdAt,
  total,
}: {
  createdAt: string;
  total: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{createdAt}</Text>
      <Text style={styles.right}>{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingTop: 10,
  },
  left: {
    color: '#8A8A8A',
  },
  right: {
    fontWeight: 'bold',
  },
});

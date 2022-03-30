import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

interface IRestaurant {
  id: string;
  name: string;
  imageUrl: string;
  location: {
    address1: string;
    city: string;
  };
}

export const Restaurant = ({
  restaurant,
  status,
}: {
  restaurant: IRestaurant;
  status: string;
}) => (
  <View style={styles.restaurant}>
    <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
    <View style={styles.row}>
      <View>
        <Text>{restaurant.name}</Text>
        <Text style={styles.address}>{restaurant.location.address1}</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.labelText}>{status}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restaurant: {
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 10,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  address: {
    color: 'darkgray',
    fontSize: 12,
  },
  label: {
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 4,
  },
  labelText: {
    color: 'darkgray',
    fontSize: 12,
  },
});

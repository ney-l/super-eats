import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SliderBox } from 'react-native-image-slider-box';
import { IRestaurant } from '../../types';

const Restaurant = ({
  restaurant,
  onRestaurantClick,
}: {
  restaurant: IRestaurant;
  onRestaurantClick: (restaurant: IRestaurant) => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onRestaurantClick(restaurant)}
    >
      <View style={styles.restaurant}>
        <RestaurantImage images={restaurant.images} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = ({ images }: { images: string[] }) => {
  return (
    <>
      <Image
        source={{
          uri: images[0],
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.heartIcon}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }: { name: string; rating: number }) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.time}>30-45 • min</Text>
    </View>
    <View style={styles.rating}>
      <Text>{rating}</Text>
    </View>
  </View>
);

export const Restaurants = ({
  restaurants,
  onRestaurantClick,
}: {
  restaurants: IRestaurant[] | [];
  onRestaurantClick: (restaurant: IRestaurant) => void;
}) => {
  if (!restaurants.length) return null;
  return (
    <>
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
          onRestaurantClick={onRestaurantClick}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    marginTop: 10,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 220,
  },
  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: 'gray',
  },
  rating: {
    backgroundColor: 'white',
    height: 30,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

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
        <RestaurantImage imageUrl={restaurant.imageUrl} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Image
        source={{
          uri: imageUrl,
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
      <Text>{rating} ⭐️</Text>
    </View>
  </View>
);

export const Restaurants = ({
  restaurants,
  onRestaurantClick,
  isNotFound,
}: {
  restaurants: IRestaurant[] | [];
  onRestaurantClick: (restaurant: IRestaurant) => void;
  isNotFound: boolean;
}) => {
  if (isNotFound) {
    return <RestaurantsEmptyState isShow={isNotFound} />;
  }
  return (
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
          onRestaurantClick={onRestaurantClick}
        />
      ))}
    </View>
  );
};

export const RestaurantsEmptyState = ({ isShow }: { isShow: boolean }) => {
  if (!isShow) {
    return null;
  }

  return (
    <View style={emptyStateStyles.container}>
      <LottieView
        style={emptyStateStyles.icon}
        source={require('../../../assets/animations/nothing-found.json')}
        autoPlay
        speed={1}
      />
      <Text style={emptyStateStyles.text}>
        Oh oh.. no restaurants found. Try another category or location?
      </Text>
    </View>
  );
};

const emptyStateStyles = StyleSheet.create({
  container: { padding: 1, height: 200, flex: 1 },
  icon: { position: 'relative' },
  text: { textAlign: 'center', fontWeight: 'bold' },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});

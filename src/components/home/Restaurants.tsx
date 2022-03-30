import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

import { IRestaurant, useAppDispatch, useAppSelector } from '../../types';
import { addFavorite } from '../../store/features/restaurantsSlice';

const Restaurant = ({
  restaurant,
  onRestaurantClick,
}: {
  restaurant: IRestaurant;
  onRestaurantClick: (restaurant: IRestaurant) => void;
}) => {
  const dispatch = useAppDispatch();
  const favRestaurants = useAppSelector((state) => state.restaurants);

  const isFavorite = favRestaurants.some((res) => res.id === restaurant.id);

  const onFavoritePress = () => {
    dispatch(addFavorite(restaurant));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onRestaurantClick(restaurant)}
    >
      <View style={styles.restaurant}>
        <RestaurantImage
          imageUrl={restaurant.imageUrl}
          onFavoritePress={onFavoritePress}
          isFavorite={isFavorite}
        />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = ({
  imageUrl,
  onFavoritePress,
  isFavorite,
}: {
  imageUrl: string;
  onFavoritePress: () => void;
  isFavorite: boolean;
}) => {
  return (
    <>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.heartIcon} onPress={onFavoritePress}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 5,
            borderRadius: 100,
          }}
        >
          <MaterialCommunityIcons
            name={isFavorite ? 'heart' : 'heart-outline'}
            color={isFavorite ? 'tomato' : '#fff'}
            size={25}
          />
        </View>
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
  notFoundText,
}: {
  restaurants: IRestaurant[] | [];
  onRestaurantClick: (restaurant: IRestaurant) => void;
  isNotFound: boolean;
  notFoundText: string;
}) => {
  if (isNotFound) {
    return <RestaurantsEmptyState isShow={isNotFound} text={notFoundText} />;
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

export const RestaurantsEmptyState = ({
  isShow,
  text,
}: {
  isShow: boolean;
  text: string;
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <View style={emptyStateStyles.container}>
      <LottieView
        style={emptyStateStyles.icon}
        source={require('../../../assets/animations/not-found.json')}
        autoPlay
        speed={1}
      />
      <Text style={emptyStateStyles.text}>{text}</Text>
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

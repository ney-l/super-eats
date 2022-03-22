import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { IRestaurant } from '../../types';

export const About = ({ restaurant }: { restaurant: IRestaurant }) => {
  const { name, imageUrl, categories, price, rating, reviewCount } = restaurant;
  const formattedCategories = categories.map((cat) => cat.title).join(' • ');
  const description = `${formattedCategories} • ${price} • 🎫 • ${rating} ⭐️ (${reviewCount} 💬)`;
  return (
    <View>
      <RestaurantImage image={imageUrl} />
      <RestaurantName name={name} />
      <Description description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }: { image: string }) => (
  <Image source={{ uri: image }} style={styles.image} />
);

const RestaurantName = ({ name }: { name: string }) => (
  <Text style={styles.name}>{name}</Text>
);

const Description = ({ description }: { description: string }) => (
  <Text style={styles.description}>{description}</Text>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});

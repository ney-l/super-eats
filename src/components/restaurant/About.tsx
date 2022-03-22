import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const restaurant = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image:
    'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  price: '$$',
  reviews: '1500',
  rating: 5,
  categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};

export const About = () => {
  const { name, image, categories, price, rating, reviews } = restaurant;
  const formattedCategories = categories.map((cat) => cat.title).join(' • ');
  const description = `${formattedCategories} • ${price} • 🎫 • ${rating} ⭐️ (${reviews})`;
  return (
    <View>
      <RestaurantImage image={image} />
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

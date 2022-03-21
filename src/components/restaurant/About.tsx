import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const image =
  'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai • Comfort Food • $$ • 🎫 • 4 ⭐️ (2913+)';

export const About = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <Description description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }: { image: string }) => (
  <Image source={{ uri: image }} style={styles.image} />
);

const RestaurantTitle = ({ title }: { title: string }) => (
  <Text style={styles.title}>{title}</Text>
);

const Description = ({ description }: { description: string }) => (
  <Text style={styles.description}>{description}</Text>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  title: {
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

import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://source.unsplash.com/500x500/?user' }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Amsang</Text>
        <Text style={styles.subtitle}>View Dineline</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#696969',
  },
});

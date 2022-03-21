import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { About } from '../components/restaurant/About';
import { Divider } from 'react-native-elements';
import { MenuItems } from '../components/restaurant/MenuItems';

export const Restaurant = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={styles.divider} />
      <MenuItems />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});

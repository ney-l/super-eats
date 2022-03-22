import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { About } from '../components/restaurant/About';
import { Divider } from 'react-native-elements';
import { MenuItems } from '../components/restaurant/MenuItems';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';

export const Restaurant = ({
  route,
}: StackScreenProps<StackParams, 'Restaurant'>) => {
  console.log(route.params);
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

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { About } from '../components/restaurant/About';
import { Divider } from 'react-native-elements';
import { MenuItems } from '../components/restaurant/MenuItems';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';
import { ViewCart } from '../components/restaurant/ViewCart';

export const Restaurant = ({
  route,
}: StackScreenProps<StackParams, 'Restaurant'>) => {
  const { restaurant } = route.params;
  return (
    <View>
      <About restaurant={restaurant} />
      <Divider width={1.8} style={styles.divider} />
      <MenuItems />
      <ViewCart />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { About } from '../components/restaurant/About';
import { Divider } from 'react-native-elements';

export const Restaurant = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});

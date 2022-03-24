import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const Browse = () => {
  return (
    <View style={styles.container}>
      <Text>Browse Screen</Text>
      <Text>🏗 Under Construction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

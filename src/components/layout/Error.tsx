import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Error = ({ error }: { error: string }) => {
  if (!error) return null;

  return (
    <View style={styles.container}>
      <Text>Something went wrong!</Text>
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaWrapper } from '../components/layout';

export const Signup = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Signup</Text>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

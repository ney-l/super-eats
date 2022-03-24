import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaWrapper } from '../components/layout';

export const Login = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

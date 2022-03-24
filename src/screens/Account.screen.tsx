import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';

export const Account = ({
  navigation,
}: StackScreenProps<StackParams, 'Account'>) => {
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('Login');
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
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

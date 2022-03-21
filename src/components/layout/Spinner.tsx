import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

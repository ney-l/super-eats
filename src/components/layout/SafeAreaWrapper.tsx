import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export const SafeAreaWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: object;
}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, style ? style : {}]}>
        <View style={styles.container}>
          <StatusBar />
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

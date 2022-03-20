import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTabs } from '../components/layout';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

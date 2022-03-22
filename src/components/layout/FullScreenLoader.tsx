import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const FullScreenLoader = () => {
  return (
    <View style={styles.loading}>
      <LottieView
        style={styles.loadingIcon}
        source={require('../../../assets/animations/scanner.json')}
        autoPlay
        speed={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  loadingIcon: {
    height: 200,
  },
});

export default FullScreenLoader;

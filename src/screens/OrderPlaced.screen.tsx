import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import { useAppSelector } from '../types';
import { getTotalUSD } from '../utils/formatters.util';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuItems } from '../components/restaurant/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';

export const OrderPlaced = () => {
  const { restaurant, selectedItems } = useAppSelector((state) => state.cart);
  const total = getTotalUSD(selectedItems);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <LottieView
          style={styles.checkmark}
          source={require('../../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.text}>
          Your order at {restaurant.name} has been placed for {total}
        </Text>
        <ScrollView>
          <MenuItems
            imageStyles={{ marginLeft: 10 }}
            menu={selectedItems}
            restaurantName={restaurant.name}
            restaurantId={restaurant.id}
            hideCheckbox
          />
          <LottieView
            style={styles.cooking}
            source={require('../../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    margin: 15,
    alignItems: 'center',
    height: '100%',
  },
  checkmark: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cooking: {
    height: 200,
    alignSelf: 'center',
  },
});

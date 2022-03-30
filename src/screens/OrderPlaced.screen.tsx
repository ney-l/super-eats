import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import { useAppDispatch, useAppSelector } from '../types';
import { getTotalUSD } from '../utils/formatters.util';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuItems } from '../components/restaurant/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';
import { clearCart } from '../store/features/cartSlice';

export const OrderPlaced = ({
  navigation,
}: StackScreenProps<StackParams, 'OrderPlaced'>) => {
  const { restaurant, selectedItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const total = getTotalUSD(selectedItems);

  const handleHomeClick = () => {
    dispatch(clearCart());
    navigation.navigate('Orders');
  };

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            imageStyles={{ marginLeft: 10 }}
            menu={selectedItems}
            hideCheckbox
            restaurant={restaurant}
          />
          <LottieView
            style={styles.cooking}
            source={require('../../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
          <GoHomeButton onHomeClick={handleHomeClick} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const GoHomeButton = ({ onHomeClick }: { onHomeClick: () => void }) => (
  <View style={styles.goHomeContainer}>
    <TouchableOpacity style={styles.goHomeButton} onPress={onHomeClick}>
      <Text style={styles.goHomeText}>Go Home</Text>
    </TouchableOpacity>
  </View>
);

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
    paddingTop: 10,
  },
  cooking: {
    height: 200,
    alignSelf: 'center',
  },
  goHomeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 50,
  },
  goHomeButton: {
    marginTop: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  goHomeText: {
    color: 'white',
    fontSize: 20,
  },
});

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, Restaurant, OrderPlaced } from './screens';
import { IRestaurant } from './types';

export type StackParams = {
  Home: undefined;
  Restaurant: { restaurant: IRestaurant };
  OrderPlaced: undefined;
};

export const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            headerShown: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

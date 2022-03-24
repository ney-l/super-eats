import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, Restaurant, OrderPlaced, Account } from './screens';
import { IRestaurant } from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabs } from './components/layout';
import { Browse } from './screens/Browse.screen';
import { Orders } from './screens/Orders.screen';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={BottomTabs}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen name="Home" component={HomeTabs} />
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

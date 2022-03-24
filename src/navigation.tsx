import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, Restaurant, OrderPlaced, Account } from './screens';
import { IRestaurant } from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabs } from './components/layout';
import { Browse } from './screens/Browse.screen';
import { Orders } from './screens/Orders.screen';
import { Signup } from './screens/Signup.screen';
import { Login } from './screens/Login.screen';

export type StackParams = {
  Home: undefined;
  Restaurant: { restaurant: IRestaurant };
  OrderPlaced: undefined;
  Account: undefined;
  Login: undefined;
};

const screenOptions = {
  headerShown: false,
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={BottomTabs}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export const RootNavigation = () => {
  const Stack = createStackNavigator();

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
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

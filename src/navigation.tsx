import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  Restaurant,
  OrderPlaced,
  Account,
  Orders,
  Login,
  Otp,
  Signup,
  Favorites,
} from './screens';
import { IRestaurant } from './types';
import { BottomTabs } from './components/layout';

export type StackParams = {
  Home: undefined;
  Restaurant: { restaurant: IRestaurant };
  OrderPlaced: undefined;
  Account: undefined;
  Login: undefined;
  Otp: undefined;
  Favorites: undefined;
};

const screenOptions = {
  headerShown: false,
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
  const isSignedIn = false;
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={BottomTabs}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Orders" component={Orders} />
      {isSignedIn ? (
        <Tab.Screen name="Account" component={Account} />
      ) : (
        <>
          <Tab.Screen name="Account" component={Login} />
          <Tab.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: true, title: 'Login with OTP' }}
          />
        </>
      )}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

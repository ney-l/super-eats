import React, { useState } from 'react';
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
  const [token, setToken] = useState<string | null>(null);
  const isSignedIn = Boolean(token);
  const handleLogin = () => setToken('__SAMPLE__');
  const handleLogout = () => setToken('');

  const RenderOtp = (props) => <Otp onLogin={handleLogin} {...props} />;
  const RenderAccount = (props) => (
    <Account onLogout={handleLogout} {...props} />
  );
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={BottomTabs}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen
        name="Favorites"
        options={{
          headerShown: true,
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: true,
        }}
      />
      {isSignedIn ? (
        <Tab.Screen name="Account" component={RenderAccount} />
      ) : (
        <>
          <Tab.Screen name="Account" component={Login} />
          <Tab.Screen
            name="Otp"
            component={RenderOtp}
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

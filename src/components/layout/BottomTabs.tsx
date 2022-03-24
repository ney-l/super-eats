import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export const BottomTabs = ({ navigation }: BottomTabBarProps) => {
  const handlePress = (route: string) => {
    if (route === 'Home') {
      navigation.navigate('Home', { screen: 'HomeTab' });
      return;
    }
    navigation.navigate(route);
  };
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" id="Home" onPress={handlePress} />
      <Icon icon="search" text="Browse" id="Browse" onPress={handlePress} />
      <Icon icon="receipt" text="Orders" id="Orders" onPress={handlePress} />
      <Icon icon="user" text="Account" id="Account" onPress={handlePress} />
    </View>
  );
};

const Icon = ({
  icon,
  text,
  onPress,
  id,
}: {
  icon: string;
  text: string;
  id: string;
  onPress: (id: string) => void;
}) => (
  <TouchableOpacity onPress={() => onPress(id)}>
    <View>
      <FontAwesome5 name={icon} size={25} style={styles.icon} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
    color: '#232930',
  },
});

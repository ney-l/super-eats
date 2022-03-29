import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const icons = [
  {
    text: 'Home',
    icon: 'home',
  },
  {
    text: 'Favorites',
    icon: 'heart',
  },
  {
    text: 'Orders',
    icon: 'receipt',
  },
  {
    text: 'Account',
    icon: 'user',
  },
];

export const BottomTabs = ({ navigation, ...rest }: BottomTabBarProps) => {
  console.log(rest.state);
  const handlePress = (route: string) => {
    if (route === 'Home') {
      navigation.navigate('Home', { screen: 'HomeTab' });
      return;
    }
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      {icons.map(({ icon, text }) => (
        <Icon
          key={icon}
          icon={icon}
          text={text}
          id={text}
          onPress={handlePress}
        />
      ))}
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

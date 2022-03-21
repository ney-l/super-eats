import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const Icon = ({ icon, text }: { icon: string; text: string }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={icon} size={25} style={styles.icon} />
      <Text style={{}}>{text}</Text>
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

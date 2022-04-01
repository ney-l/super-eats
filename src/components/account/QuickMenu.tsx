import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const options = [
  {
    icon: 'hearto',
    title: 'Likes',
  },
  {
    icon: 'bells',
    title: 'Notifications',
  },
  {
    icon: 'setting',
    title: 'Settings',
  },
  {
    icon: 'creditcard',
    title: 'Payments',
  },
];

export const QuickMenu = () => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Option key={option.title} icon={option.icon} title={option.title} />
      ))}
    </View>
  );
};

const Option = ({ icon, title }: { icon: string; title: string }) => (
  <TouchableOpacity>
    <View style={styles.option}>
      <AntDesign name={icon} size={20} />
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  option: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 12,
    marginTop: 15,
  },
});

import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Search = ({
  text,
  onChangeText,
}: {
  text: string;
  onChangeText: (val) => void;
}) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" style={styles.icon} size={20} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search by restaurant"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  icon: {
    paddingLeft: 15,
    color: '#DD5B63',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 6,
    textAlign: 'left',
    width: '90%',
    fontSize: 15,
  },
});

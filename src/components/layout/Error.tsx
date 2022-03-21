import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Error = ({ error }: { error: string }) => {
  if (!error) return null;

  return (
    <View style={styles.container}>
      <SimpleLineIcons name="exclamation" size={25} color="#D8000C" />
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>Uh Oh.. Something went wrong! 😰</Text>
        <Text style={styles.message}>{error}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFD2D2',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
  },
  messageWrapper: {
    paddingLeft: 10,
  },
  message: {
    color: '#D8000C',
    fontWeight: 'bold',
  },
});

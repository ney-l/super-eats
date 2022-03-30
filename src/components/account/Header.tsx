import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Ney</Text>
          <View style={styles.subheading}>
            <Text style={styles.subtitle}>View Activity</Text>
            <AntDesign style={styles.icon} name="right" size={10} />
          </View>
        </View>
        <View>
          <Image
            source={{ uri: 'https://source.unsplash.com/500x500/?user' }}
            style={styles.image}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',

    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  subheading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#DD5B63',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    paddingBottom: 5,
  },
  subtitle: {
    fontSize: 10,
    color: '#DD5B63',
  },
});

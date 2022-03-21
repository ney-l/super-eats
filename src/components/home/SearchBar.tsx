import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { googleApiKey } from '../../config';

export const SearchBar = ({
  city,
  onCityChange,
}: {
  city: string;
  onCityChange: (city: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={city ?? 'Search'}
        query={{ key: googleApiKey }}
        onPress={(data, details) => {
          const [newCity] = data.description.split(',');
          onCityChange(newCity);
        }}
        styles={searchBarStyles}
        renderLeftButton={() => (
          <View>
            <Ionicons
              name="location-sharp"
              size={24}
              style={styles.locationIcon}
            />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchButton}>
            <AntDesign name="clockcircle" size={11} style={styles.clockIcon} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export const searchBarStyles = {
  textInput: {
    backgroundColor: '#eee',
    borderRadius: 20,
    fontWeight: '700',
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: '#eee',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  locationIcon: {
    marginLeft: 10,
  },
  searchButton: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  clockIcon: {
    marginRight: 6,
  },
});

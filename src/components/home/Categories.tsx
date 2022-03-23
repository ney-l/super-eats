import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const categories = [
  {
    id: 'turkish',
    text: 'Turkish',
    image: require('../../../assets/images/turkish.png'),
  },
  {
    id: 'chinese',
    text: 'Chinese',
    image: require('../../../assets/images/chinese.png'),
  },
  {
    id: 'italian',
    text: 'Italian',
    image: require('../../../assets/images/pizza.png'),
  },
  {
    id: 'steak',
    text: 'Steak',
    image: require('../../../assets/images/steak.png'),
  },
  {
    id: 'coffee',
    text: 'Coffee',
    image: require('../../../assets/images/coffee.png'),
  },
  {
    id: 'vegan',
    text: 'Vegan',
    image: require('../../../assets/images/salad.png'),
  },
  {
    id: 'dessert',
    text: 'Dessert',
    image: require('../../../assets/images/desserts.png'),
  },
];

export const Categories = ({
  onCategoryPress,
  selectedId,
}: {
  onCategoryPress: (id: string) => void;
  selectedId?: string;
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            onPress={() => onCategoryPress(item.id)}
            style={item.id === selectedId ? styles.selected : {}}
          >
            <View key={item.text} style={styles.category}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  selected: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  image: { width: 50, height: 40, resizeMode: 'contain' },
  text: {
    fontSize: 13,
    fontWeight: '900',
  },
});

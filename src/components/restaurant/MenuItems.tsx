import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { addToCart } from '../../store/features/cartSlice';
import { IMenuItem, useAppDispatch, useAppSelector } from '../../types';

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
];

export const MenuItems = ({ restaurantName }: { restaurantName: string }) => {
  const { selectedItems } = useAppSelector((state) => state.cart);
  console.log({ selectedItems, restaurantName });
  const dispatch = useAppDispatch();

  const selectItem = (item: IMenuItem) =>
    dispatch(addToCart({ item, restaurantName }));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={`${food.title}-${index}`}>
          <View style={styles.menuItems}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: 'lightgray',
                borderRadius: 4,
              }}
              fillColor="#1fc700"
              onPress={() => selectItem(food)}
            />
            <FoodInfo food={food} />
            <FoodImage imageUrl={food.image} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({
  food,
}: {
  food: { title: string; description: string; price: string };
}) => {
  const { title, description, price } = food;
  return (
    <View style={styles.foodInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const FoodImage = ({ imageUrl }: { imageUrl: string }) => (
  <View>
    <Image source={{ uri: imageUrl }} style={styles.foodImage} />
  </View>
);

const styles = StyleSheet.create({
  menuItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  foodInfo: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

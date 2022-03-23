import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { addOrRemoveToCart } from '../../store/features/cartSlice';
import { IMenuItem, useAppDispatch, useAppSelector } from '../../types';

export const MenuItems = ({
  restaurantName,
  restaurantId,
  hideCheckbox,
  imageStyles,
  menu,
}: {
  restaurantName: string;
  restaurantId: string;
  hideCheckbox?: boolean;
  imageStyles?: {};
  menu: IMenuItem[];
}) => {
  const { selectedItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const selectItem = (item: IMenuItem) =>
    dispatch(addOrRemoveToCart({ item, restaurantName, restaurantId }));

  const findSelected = (id: string) =>
    selectedItems.some((item) => item.id === id);

  // add margin bottom on the Order Preview page so that the
  // View Cart button does not overlap the menu text
  const marginBottom = selectedItems.length && !hideCheckbox ? 60 : 0;

  return (
    <ScrollView style={{ marginBottom }} showsVerticalScrollIndicator={false}>
      {menu.map((menuItem, index) => (
        <View key={`${menuItem.title}-${index}`}>
          <View style={styles.menuItems}>
            {!hideCheckbox && (
              <BouncyCheckbox
                iconStyle={{
                  borderColor: 'lightgray',
                  borderRadius: 4,
                }}
                fillColor="#1fc700"
                onPress={() => selectItem(menuItem)}
                isChecked={findSelected(menuItem.id)}
              />
            )}
            <MenuItemInfo menuItem={menuItem} />
            <MenuItemImage
              imageUrl={menuItem.image}
              imageStyles={imageStyles}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const MenuItemInfo = ({
  menuItem,
}: {
  menuItem: { title: string; description: string; price: string };
}) => {
  const { title, description, price } = menuItem;
  return (
    <View style={styles.menuItemInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const MenuItemImage = ({
  imageUrl,
  imageStyles = {},
}: {
  imageUrl: string;
  imageStyles?: {};
}) => (
  <View>
    <Image
      source={{ uri: imageUrl }}
      style={[styles.menuItemImage, imageStyles]}
    />
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
  menuItemInfo: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

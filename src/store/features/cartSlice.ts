import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem, IRestaurant } from '../../types';

interface ICartState {
  selectedItems: [] | IMenuItem[];
  restaurant: IRestaurant;
}

const initialState: ICartState = {
  selectedItems: [],
  restaurant: {
    id: '',
    name: '',
    imageUrl: '',
    rating: 0,
    reviewCount: 0,
    categories: [{ title: '' }],
    price: '',
    transactions: [''],
    location: {
      address1: '',
      city: '',
    },
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrRemoveToCart: (
      state,
      {
        payload: { item, restaurant },
      }: PayloadAction<{
        item: IMenuItem;
        restaurant: IRestaurant;
      }>
    ) => {
      if (state.selectedItems.find((i) => i.id === item.id)) {
        state.selectedItems = state.selectedItems.filter(
          (i) => i.id !== item.id
        );
      } else {
        state.selectedItems = [...state.selectedItems, item];
      }
      state.restaurant = restaurant;
    },
    clearCart: (state) => {
      state.selectedItems = [];
      state.restaurant = {};
    },
  },
});

export const { addOrRemoveToCart, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

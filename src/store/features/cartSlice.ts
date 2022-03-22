import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem } from '../../types';

interface ICartState {
  selectedItems: [] | IMenuItem[];
  restaurant: {
    id: string;
    name: string;
  };
}

const initialState: ICartState = {
  selectedItems: [],
  restaurant: {
    id: '',
    name: '',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrRemoveToCart: (
      state,
      {
        payload: { item, restaurantName, restaurantId },
      }: PayloadAction<{
        item: IMenuItem;
        restaurantName: string;
        restaurantId: string;
      }>
    ) => {
      if (state.selectedItems.find((i) => i.id === item.id)) {
        state.selectedItems = state.selectedItems.filter(
          (i) => i.id !== item.id
        );
      } else {
        state.selectedItems = [...state.selectedItems, item];
      }
      state.restaurant.name = restaurantName;
      state.restaurant.id = restaurantId;
    },
  },
});

export const { addOrRemoveToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

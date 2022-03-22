import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem } from '../../types';

interface ICartState {
  restaurantName: string;
  selectedItems: {
    items: IMenuItem[];
  };
}

const initialState: ICartState = {
  selectedItems: {
    items: [],
  },
  restaurantName: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      {
        payload: { item, restaurantName },
      }: PayloadAction<{ item: IMenuItem; restaurantName: string }>
    ) => {
      state.selectedItems = { items: [...state.selectedItems.items, item] };

      state.restaurantName = restaurantName;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

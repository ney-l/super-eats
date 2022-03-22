import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem } from '../../types';

interface ICartState {
  restaurantName: string;
  selectedItems: [] | IMenuItem[];
}

const initialState: ICartState = {
  restaurantName: '',
  selectedItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrRemoveToCart: (
      state,
      {
        payload: { item, restaurantName },
      }: PayloadAction<{ item: IMenuItem; restaurantName: string }>
    ) => {
      if (state.selectedItems.find((i) => i.id === item.id)) {
        state.selectedItems = state.selectedItems.filter(
          (i) => i.id !== item.id
        );
      } else {
        state.selectedItems = [...state.selectedItems, item];
      }
      state.restaurantName = restaurantName;
    },
  },
});

export const { addOrRemoveToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRestaurant } from '../../types';

const initialState: IRestaurant[] = [];

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IRestaurant>) => {
      if (state.some((restaurant) => restaurant.id === payload.id)) {
        state.splice(
          state.findIndex((res) => res.id === payload.id),
          1
        );
      } else {
        state.push(payload);
      }
    },
  },
});

export const { addFavorite } = restaurantsSlice.actions;
export const restaurantsReducer = restaurantsSlice.reducer;

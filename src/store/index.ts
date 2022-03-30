import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cartSlice';
import { ordersReducer } from './features/ordersSlice';
import { restaurantsReducer } from './features/restaurantsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
    restaurants: restaurantsReducer,
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from '../../types';

const orders = [
  {
    id: 1,
    restaurant: {
      id: 'hdiuRS9sVZSMReZm4oV5SA',
      name: 'Da Andrea',
      imageUrl:
        'https://s3-media2.fl.yelpcdn.com/bphoto/SCuuHjFSwNpuYxpncVDs9w/o.jpg',
      location: {
        address1: '1534 N McCadden Pl',
        city: 'Los Angeles',
      },
    },
    selectedItems: [
      {
        description: 'With butter lettuce, tomato and sauce bechamel',
        id: '1',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
        price: '$13.50',
        title: 'Lasagna',
        quantity: 1,
        size: 'Regular',
      },
      {
        description:
          'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
        id: '2',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
        price: '$19.20',
        title: 'Tandoori Chicken',
        quantity: 1,
        size: 'Regular',
      },
    ],
    status: 'Delivered',
    createdAt: '30 Mar 2022 at 9:10PM',
  },
  {
    id: 2,
    restaurant: {
      id: 'J3NT61-AH5d5Gu5tFJhYSw',
      name: 'The Cabin NYC',
      imageUrl:
        'https://s3-media2.fl.yelpcdn.com/bphoto/BCT1NUTlwCan0KTW1JmRIw/o.jpg',
      location: {
        address1: '1620 N Cahuenga Blvd',
        city: 'Los Angeles',
      },
    },
    selectedItems: [
      {
        description:
          'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
        id: '3',
        image:
          'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
        price: '$14.50',
        title: 'Chilaquiles',
        quantity: 1,
        size: 'Regular',
      },
      {
        description:
          'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
        id: '4',
        image:
          'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
        price: '$21.50',
        title: 'Chicken Caesar Salad',
        quantity: 1,
        size: 'Regular',
      },
    ],
    status: 'Delivered',
    createdAt: '29 Mar 2022 at 8:30PM',
  },
  {
    id: 3,
    restaurant: {
      id: 'fVbUVAiLiGgLA_nxBFxyww',
      name: 'Thursday Kitchen',
      imageUrl:
        'https://s3-media2.fl.yelpcdn.com/bphoto/kx6lT4K3kNV8ZUauntNQhA/o.jpg',
      location: {
        address1: '5732 Melrose Ave',
        city: 'Los Angeles',
      },
    },
    selectedItems: [
      {
        description:
          'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
        id: '3',
        image:
          'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
        price: '$14.50',
        title: 'Chilaquiles',
        quantity: 1,
        size: 'Regular',
      },
      {
        description: 'With butter lettuce, tomato and sauce bechamel',
        id: '1',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
        price: '$13.50',
        title: 'Lasagna',
        quantity: 1,
        size: 'Regular',
      },
    ],
    status: 'Delivered',
    createdAt: '28 Mar 2022 at 10:10PM',
  },
];

const ordersSlice = createSlice({
  name: 'orders',
  initialState: orders,
  reducers: {
    addOrder: (state, { payload }: PayloadAction<IOrder>) => {
      state.unshift(payload);
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
export const { addOrder } = ordersSlice.actions;

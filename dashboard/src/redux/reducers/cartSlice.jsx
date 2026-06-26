import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
  state.cart.push(action.payload);  
  },
  incrementQuantity: (state, action) => {
    const item = state.cart.find(item => item.id === action.payload);
    item.quantity += 1;
  },
  decrementQuantity: (state, action) => {
    const item = state.cart.find(item => item.id === action.payload);
    if(item.quantity === 1) {
      state.cart = state.cart.filter(i => i.id !== action.payload);
    } else {
      item.quantity -=1;
    }
  },
  removeProduct: (state,action) => {
    state.cart = state.cart.filter(i => i.id !== action.payload);
  }
  }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeProduct } = cartSlice.actions

export default cartSlice.reducer
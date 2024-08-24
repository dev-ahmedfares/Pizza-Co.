import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      // payload =>  newItem
      state.cart.push(action.payload);
    },
    deleteCart(state, action) {
      // payload => id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      // payload => id
      const currentItem = state.cart.find((item)=>  item.pizzaId === action.payload)
      currentItem.quantity++;
      currentItem.totalPrice= currentItem.quantity * currentItem.unitPrice
    },
    decreaseQuantity(state, action) {
      // payload => id
      const currentItem = state.cart.find((item)=>  item.pizzaId === action.payload)
      currentItem.quantity--;
      currentItem.totalPrice= currentItem.quantity * currentItem.unitPrice
    if (currentItem.quantity === 0)  cartSlice.caseReducers.deleteCart(state,action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state)=> state.cart.cart

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0,
  );

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

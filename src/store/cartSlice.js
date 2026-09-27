import { createSlice } from "@reduxjs/toolkit";

let datafromweb = JSON.parse(localStorage.getItem("cart"))

const cartSlice = createSlice({
  name: "cart",

  initialState: datafromweb,

  reducers: {
    addItems(state, action) {
      state.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItems(state, action) {
      const newState = state.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
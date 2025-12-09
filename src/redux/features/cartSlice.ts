import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;

      const existing = state.cartItems.find((it) => it.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    removeOne: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.cartItems.find((it) => it.id === id);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((it) => it.id !== id);
      }
    },

    removeItemCompletely: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (it) => it.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeOne, removeItemCompletely, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

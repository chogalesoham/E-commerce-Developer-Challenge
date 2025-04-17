import { createSlice } from "@reduxjs/toolkit";

// Initial state with data loaded from localStorage (if available)
const initialState = {
  products:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            product.quantity += 1;
          }
          return product;
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.products));
      updateCartState(state);
    },

    updateQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "INC") {
            product.quantity += 1;
          } else if (action.payload.type === "DEC") {
            if (product.quantity > 1) {
              product.quantity -= 1;
            }
          }
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(state.products));
      updateCartState(state);
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
      updateCartState(state);
    },

    clearCart: (state) => {
      state.products = [];
      localStorage.setItem("cart", JSON.stringify([]));
      updateCartState(state);
    },

    initializeCart: (state) => {
      updateCartState(state);
    },
  },
});

// Utility functions to update totals
const updateCartState = (state) => {
  state.selectedItems = setSelectedItem(state);
  state.totalPrice = setTotalPrice(state);
  state.tax = setTax(state);
  state.grandTotal = setGrandTotal(state);
};

export const setSelectedItem = (state) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const setTotalPrice = (state) =>
  state.products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => {
  return setTotalPrice(state) + setTax(state);
};

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  initializeCart,
} = cartSlice.actions;

export default cartSlice.reducer;

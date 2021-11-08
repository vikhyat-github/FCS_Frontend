import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import productReducer from '../slices/productSlice';
const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer,
  },
});
export default store;
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      // Actions
        changeProduct: (state, action) => {
            state.id = action.payload; 
        }
    },
  });

export const { changeProduct} = productSlice.actions;
export const selectedItem = (state) => state.product.id;
export default productSlice.reducer;
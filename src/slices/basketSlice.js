import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.items = action.payload
    },
    // Actions
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id)
      if(index<0){
        
        state.items = [...state.items, action.payload]
        
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id)
      let newBasket = [...state.items];

      if(index >= 0)
      {
          newBasket.splice(index,1)
      }
      else {
        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket`)
      }
      state.items = newBasket;
    },
    addQuantity: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id)

      let newProd = {...state.items[index], quantity: state.items[index].quantity + 1}
      
      state.items[index] = newProd 
    },
    deleteQuantity: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      console.log(index);

      const cartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      
      if (cartItem.quantity === 1) {
        newBasket.splice(index, 1);
        state.items = newBasket;
        
      } else {
        let newProd = {
          ...state.items[index],
          quantity: state.items[index].quantity - 1,
        };

        state.items[index] = newProd;
      }
    },

  },
});

export const {setBasket, addToBasket, removeFromBasket, addQuantity, deleteQuantity } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => state.basket.items.reduce((total,item) => total + item.price*item.quantity,0)
export default basketSlice.reducer;
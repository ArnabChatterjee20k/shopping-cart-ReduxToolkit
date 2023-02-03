import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const name = action.payload.name
      const price = action.payload.price
    //   state.get(id) ? state.set(id, state.get(id) + 1) : 1;
      // state[id] = state[id]+1 || 1
      if(state[id]){
        state[id].count +=1
      }
      else{
        state[id] = {
          count:1,
          name,
          price
        }
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      if (state[id]) {
        state[id].count -= 1
        state[id].count<1 && delete state[id]
      }
    },
  },
});

export const getItemById = (state,id)=> state.cart[id]?.count || 0;

export const getCart =(state)=> state.cart

export const getTotalPrice = (state)=>{
  return Object.values(state.cart).reduce((initialVal,cur)=>{
    return initialVal+(cur.price*cur.count)
  },0)
}

export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer
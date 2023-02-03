import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../utils/fetcher";

const initialState = {
  products: [],
  status: "idle", // 'pending' | 'succeeded' | 'failed'
};

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const data = await fetcher.fetchAll();
  return data;
});

export const getProduct = createAsyncThunk("fetch/singleproduct", async () => {
  // const data =
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending,(state,action)=>{
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // console.log({ action });
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const fetchingStatus =(state)=>state.product.status
export const getProductList = (state)=>state.product.products
export default productSlice.reducer;

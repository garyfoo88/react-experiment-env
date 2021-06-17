import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productState = {
  entities: [],
  loading: false,
};
//redux thunk fetch api
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, { rejectWithValue, getState, requestId }) => {
    try {
    console.log(getState())
    console.log(requestId)
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: productState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      console.log("pending");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      console.log("done");
    },
    [fetchProducts.rejected]: (state, action) => {
      console.log("reject");
    },
  },
});

export default productSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import productSlice from "../features/counter/productSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        products: productSlice,
    }
})

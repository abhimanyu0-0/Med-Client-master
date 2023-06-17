import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import filterSlice from "./FilterSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        filter:filterSlice
    }
});
export default store;
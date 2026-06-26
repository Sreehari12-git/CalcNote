import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice"
import productReducer from "./reducers/productSlice"
import themeReducer from "./reducers/themeSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        theme: themeReducer
    },
})
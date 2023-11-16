import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./slices/orderSlice";
import { usersReducer } from "./slices/userSlice";
import { productReducer } from "./slices/productSlice";
import { reviewReducer } from "./slices/reviewSlice";



export const store = configureStore({
  reducer: {
    orders: orderReducer,
    products: productReducer,
    users: usersReducer,
    reveiws: reviewReducer

  },
});

export * from "./thunks/fetchApi";

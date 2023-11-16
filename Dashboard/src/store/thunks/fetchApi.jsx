import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    const GET_ALL_ORDER = "http://localhost:3000/orders/";
    const GET_ALL_PRODUCT = "http://localhost:3000/products/get-all-products";
    const GET_ALL_USER = "http://localhost:3000/users/users";
    const GET_ALL_REVIEW = "http://localhost:3000/reviews/";

export const fetchOrder = createAsyncThunk("order/fetch", async () => {
    const response = await axios.get(GET_ALL_ORDER);
    return response.data;
});

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await axios.get(GET_ALL_PRODUCT);
  return response.data;
  
});

export const fetchUser = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(GET_ALL_USER);

  return response.data;
});

export const fetchReview = createAsyncThunk("reviews/fetch", async () => {
    const response = await axios.get(GET_ALL_REVIEW);
  
    return response.data;
  });
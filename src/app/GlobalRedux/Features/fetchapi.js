'use client';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// http://localhost:3000/api/v1/books/
export const fetchApiData = createAsyncThunk('/', async () =>{
    const response = await axios.get('http://localhost:3000/api/v1/books/');
    return response.data;
})

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchApiSlice = createSlice({
  name: "fetchApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      })
  },
});

export default fetchApiSlice.reducer;
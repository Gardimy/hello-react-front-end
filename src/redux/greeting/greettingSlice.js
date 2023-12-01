/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await fetch('http://localhost:3000/greetings/random');
    const data = await response.json();

    return data.greeting;
  } catch (error) {
    // dispatch an action
    throw error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export const selectGreeting = (state) => state.greeting.greeting;

export default greetingSlice.reducer;

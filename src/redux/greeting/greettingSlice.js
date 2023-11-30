import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line consistent-return
export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await fetch('/greetings');
    const data = await response.json();
    return data.greeting;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
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

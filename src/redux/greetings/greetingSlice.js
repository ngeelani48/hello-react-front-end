import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch('http://localhost:5000/api/greetings/random');
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return 'fails';
    }
    return data;
  },
);
const initialState = {
  message: '',
  isLoading: true,
};

export const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload,
      }))
      .addCase(fetchRandomGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default GreetingSlice.reducer;

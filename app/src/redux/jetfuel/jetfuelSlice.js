import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://www.plugco.in/public/take_home_sample_feed';

const initialState = {
  jets: [],
  cwidth: 0,
  active: '',
  fetch: true,
  status: 'idle',
  loading: false,
  error: null,
};

export const fetchJets = createAsyncThunk('jets/fetchJets', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const jetsSlice = createSlice({
  name: 'jets',
  initialState,
  reducers: {
    setcwidth(state, action) {
      if (action.payload === 'left' || action.payload === 'right') {
        return { ...state, active: action.payload };
      }
      return { ...state, cwidth: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJets.pending, (state) => {
        return {...state, loading: true, status: 'pending'}
      })
      .addCase(fetchJets.fulfilled, (state, action) => {
        console.log(action.payload.campaigns)
        return {...state, loading: false, status: 'fulfilled', jets: [...action.payload.campaigns], fetch: false}
      })
      .addCase(fetchJets.rejected, (state, action) => {
        return {...state, loading: false, status: 'rejected', error: action.payload}
      });
  },
});

export const { setcwidth } = jetsSlice.actions;

export default jetsSlice.reducer;

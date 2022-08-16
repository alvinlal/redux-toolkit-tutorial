import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState: {
    numOfIcecreams: 20,
  },
  reducers: {
    ordered(state) {
      state.numOfIcecreams--;
    },
    restocked(state, action) {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: {
    'cake/ordered': state => {
      state.numOfIcecreams--;
    },
  },
});

export default icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;

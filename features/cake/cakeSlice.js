import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;

const cakeSlice = createSlice({
  name: 'cake',
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    ordered(state) {
      state.numOfCakes--;
    },
    restocked(state, action) {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;

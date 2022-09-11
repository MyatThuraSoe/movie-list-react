import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { moviesList : [], searchList: [] };

export const moviesListSlice = createSlice({
  name: "moviesListState",
  initialState: { value: initialStateValue },
  reducers: {
    addToMoviesListState: (state, action) => {
      console.log(action.payload);
      state.value.moviesList.push(action.payload);
    },

    resetMoviesListState: (state) => {
      state.value = initialStateValue;
    },

    addToSearchList: (state) =>{
      state.value.searchList = action.payload;
    },
    
  },
});

export const { addToMoviesListState, resetMoviesListState} = moviesListSlice.actions;

export default moviesListSlice.reducer;
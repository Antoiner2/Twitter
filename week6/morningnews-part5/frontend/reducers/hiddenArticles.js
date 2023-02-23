import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: "hidden Articles",
  initialState,
  reducers: {
    hidenArticle: (state, action) => {
      state.value.push(action.payload);
    },
    unhideArticles: (state) => {
      state.value = [];
    },
  },
});

export const { hidenArticle, unhideArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;

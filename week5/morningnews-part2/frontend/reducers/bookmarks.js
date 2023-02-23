import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const bookmarksSlice = createSlice ({
    name: 'bookmarks',
    initialState,
    reducers : {
        addBookmarksToStore: (state, action) => {
            console.log ('add bookmarks', action.payload);
            state.value.push(action.payload);
        },
        removeBookmarks: (state, action) => {
            state.value = state.value.filter(bookmarks => bookmarks.title !== action.payload.title);
        },
    },
});

export const { addBookmarks, removeBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
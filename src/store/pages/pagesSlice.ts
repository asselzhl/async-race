import { createSlice } from "@reduxjs/toolkit";

interface PagesState {
    currentPage: number;
}

const initialState: PagesState = {
    currentPage: 1
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
            return state;
        }
    }
})

export const { setCurrentPage } = pagesSlice.actions
export const pagesReducer = pagesSlice.reducer
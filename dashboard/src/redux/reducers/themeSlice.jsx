import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => localStorage.getItem('theme') || 'system';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: getInitialTheme()
    },
    reducers: {
        setTheme: (state, action) => {
            state.mode = action.payload
            localStorage.setItem("theme", action.payload)
        },
    },
})

export const {setTheme} = themeSlice.actions
export  default themeSlice.reducer
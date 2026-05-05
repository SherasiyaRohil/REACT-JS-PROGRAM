import { createSlice } from '@reduxjs/toolkit';
import { lightTheme, darkTheme } from './ThemeRedux';


const initialState = {
    currentTheme: lightTheme,
    mode: 'light',
    value:true,
};



export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            
            if (state.mode === 'light') {
                state.currentTheme = darkTheme;
                state.mode = 'dark';
            } else {
                state.currentTheme = lightTheme;
                state.mode = 'light';
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

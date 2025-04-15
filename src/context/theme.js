import React, {createContext, useContext} from 'react'

const ThemeContext = createContext({
    theme: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return useContext(ThemeContext)
}


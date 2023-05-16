

/***
 * Theme context
 * For dark and light mode
 * It is being toggled on the Toppanel by a switch
 */


import {createContext} from 'react';

export type ThemeTypes = "light" | "dark";

export interface ThemeContextInterface {
    theme: ThemeTypes;
    toggleTheme: () => void
}

export const ThemeContext = createContext({theme: "light", toggleTheme: () => {}} as ThemeContextInterface);

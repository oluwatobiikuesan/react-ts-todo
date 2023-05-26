import "./style/App.css";
import "./style/theme.css";
import "./style/font/_font.css";

import {FC, useState} from 'react';

import { ThemeContext, ThemeTypes } from "./context/ThemeContext";
import Sidepanel from "./components/sidepanel/Sidepanel";
import Toppanel from "./components/toppanel/Toppanel";
import Mainpanel from "./components/mainpanel/Mainpanel";



const App : FC = () =>{

  //for dark and light mode
  const [theme, setTheme]  = useState<ThemeTypes>("light");
  //this function was created so the state doesn't need to be updated from the switch directly, easier to deal with
  const toggleTheme = () : void =>{
    setTheme(theme === "light" ? "dark" : "light");
  }

  //the themecontext wraps the whole app so the theme can be toggled from the toppanel switch
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <main className="App" id={theme}>
        <Sidepanel />
        <Toppanel />
        <Mainpanel />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

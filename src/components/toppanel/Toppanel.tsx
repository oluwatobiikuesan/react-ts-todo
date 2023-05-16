import { FC, useContext } from "react";

import "../../style/components_style/Toppanel.css";
import ReactSwitch from "react-switch";

import { ThemeContext } from "../../context/ThemeContext";

const Toppanel : FC = () =>{

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div className="Toppanel">
            <div className="ThemeSwitch">
                <label>Toggle theme:
                    <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
                </label>
            </div>
        </div>
    )

}

export default Toppanel;
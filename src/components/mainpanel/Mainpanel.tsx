import { FC, useContext, useState, useEffect } from "react";

import "../../style/components_style/Mainpanel.css";
import TodoBox from "./TodoBox";
import { TodoContext } from "../../context/TodoContext";
import { TodoSelectorContext } from "../../context/TodoSelectorContext";

const Mainpanel : FC = () =>{

    const {todoItems} = useContext(TodoContext);
    const {counter} = useContext(TodoSelectorContext);

    return(
        <div className="Mainpanel">
                {
                    todoItems.length > 0 ? todoItems.slice(counter-9,counter).map((item) =>{
                        return(
                            <TodoBox key={item.id} todoItem={item}/>
                        )
                    }) : (
                        <h1 className="No-todo-heading">You got nothing to do here!</h1>
                    )
                }
        </div>
    )
}

export default Mainpanel;
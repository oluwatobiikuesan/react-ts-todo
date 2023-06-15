

import React, {createContext, useState, FC, useEffect} from 'react';

import { ITodo } from '../util/Todo';

interface ITodoContext{
    todoItems: ITodo[];
    setTodoItems: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const TodoContext = createContext({todoItems: [], setTodoItems: ()=>{}} as ITodoContext);


interface ITodoProvider{
    children: React.ReactNode;
}

const TodoProvider : FC<ITodoProvider> = ({children}) =>{
    const [todoItems, setTodoItems] = useState<ITodo[]>(window.localStorage.getItem("tsx-todo-todo-items") ? JSON.parse(window.localStorage.getItem("tsx-todo-todo-items") as string) : []);

    useEffect(()=>{
        window.localStorage.setItem("tsx-todo-todo-items", JSON.stringify(todoItems));
    }, [todoItems]);

    return(
        <TodoContext.Provider value={{todoItems, setTodoItems}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
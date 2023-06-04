

import React, {createContext, useState, FC} from 'react';

import { ITodo } from '../util/Todo';

interface ITodoContext{
    todoItems: ITodo[];
    setTodoItems: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const TodoContext = createContext({todoItems: [], setTodoItems: ()=>{}} as ITodoContext);


interface ITodoProvider{
    children: React.ReactNode
}

const TodoProvider : FC<ITodoProvider> = ({children}) =>{
    const [todoItems, setTodoItems] = useState<ITodo[]>([]);
    return(
        <TodoContext.Provider value={{todoItems, setTodoItems}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
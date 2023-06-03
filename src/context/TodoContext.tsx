

import React, {createContext, useState, FC} from 'react';

import { Todo } from '../util/Todo';

interface ITodoContext{
    todoItems: Todo[] | null;
    setTodoItems: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

export const TodoContext = createContext({todoItems: [], setTodoItems: ()=>{}} as ITodoContext);


interface ITodoProvider{
    children: React.ReactNode
}

const TodoProvider : FC<ITodoProvider> = ({children}) =>{
    const [todoItems, setTodoItems] = useState<Todo[] | null>(null);
    return(
        <TodoContext.Provider value={{todoItems, setTodoItems}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
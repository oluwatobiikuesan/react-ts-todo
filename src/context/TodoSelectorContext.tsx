
import { createContext, FC, useState } from "react";

interface ICounter{
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}


export const TodoSelectorContext = createContext<ICounter>({counter: 9, setCounter: ()=>{}} as ICounter);

interface ITodoCounterProvider {
    children: React.ReactNode;
}

export const DEFAULT_COUNTER_DELTA : number = 9;

const TodoSelectorProvider : FC<ITodoCounterProvider> = ({children})=>{

    const [counter, setCounter] = useState<number>(DEFAULT_COUNTER_DELTA);

    return(
        <TodoSelectorContext.Provider value={{counter, setCounter}}>
            {children}
        </TodoSelectorContext.Provider>
    );
};

export default TodoSelectorProvider;
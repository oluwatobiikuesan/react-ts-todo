
import { createContext, FC, useState } from "react";

interface ICounter{
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const DEFAULT_COUNTER_DELTA : number = 9;

export const TodoSelectorContext = createContext<ICounter>({counter: DEFAULT_COUNTER_DELTA, setCounter: ()=>{}} as ICounter);

interface ITodoCounterProvider {
    children: React.ReactNode;
}



const TodoSelectorProvider : FC<ITodoCounterProvider> = ({children})=>{

    const [counter, setCounter] = useState<number>(DEFAULT_COUNTER_DELTA);

    return(
        <TodoSelectorContext.Provider value={{counter, setCounter}}>
            {children}
        </TodoSelectorContext.Provider>
    );
};

export default TodoSelectorProvider;
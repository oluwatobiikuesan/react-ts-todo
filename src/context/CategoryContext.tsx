
import {FC, createContext, useState, useEffect} from 'react';
import { ICategory, DEFAULT_CATEGORIES } from '../util/Category';

interface ICategoryContext{
    categories: ICategory[],
    setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

export const CategoryContext = createContext<ICategoryContext>({categories: [], setCategories: ()=>{}} as ICategoryContext);


interface ICategoryProvider{
    children: React.ReactNode
}

const CategoryContextProvider : FC<ICategoryProvider> = ({children}) =>{
    
    const [categories, setCategories] = useState<ICategory[]>(window.localStorage.getItem("tsx-todo-categories") ? JSON.parse(window.localStorage.getItem("tsx-todo-categories") as string) : DEFAULT_CATEGORIES);
    
    useEffect(()=>{
        window.localStorage.setItem("tsx-todo-categories", JSON.stringify(categories));
    }, [categories]);

    return(
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;
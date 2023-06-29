import {FC, createContext, useState} from 'react';

interface IFilter{
    itemName: string;
    numberOfResults?: number;
}

interface IFilterContext{
    filter: IFilter;
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const FilterContext = createContext({filter: {itemName: "", numberOfResults: 0}, setFilter: ()=>{}} as IFilterContext);


interface IFilterProvider{
    children: React.ReactNode;
}

const FilterProvider : FC<IFilterProvider> = ({children})=>{

    const [filter, setFilter] = useState<IFilter>({itemName: "", numberOfResults: 0});

    return(
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}


export default FilterProvider;
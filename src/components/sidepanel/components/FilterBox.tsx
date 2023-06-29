
import {FC, useState, useContext, useEffect} from 'react';
import { FilterContext } from '../../../context/FilterContext';

const FilterBox : FC = () =>{

    const {filter, setFilter} = useContext(FilterContext);

    const [itemName, setItemName] = useState<string>("");
    

    useEffect(()=>{
        setFilter({itemName: itemName});
    }, [itemName]);


    return(
        <div className="FilterBox SidepanelBox">
            <h2 className="BoxTitle">
                Filter
            </h2>
            <form className="InputFields" onSubmit={e=>e.preventDefault()}>
                <label>Item name:
                    <input type="text" placeholder="Item name" value={itemName} onChange={e => setItemName(e.target.value)}/>
                </label>
                <label>Number of results: {filter.numberOfResults}</label>
            </form>
        </div>
    )
}

export default FilterBox;
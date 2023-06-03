
import {FC, MouseEventHandler, useEffect, useState, useContext} from 'react';
import Button from '../../shared/Button';
import Select from 'react-select';
import { TodoContext } from '../../../context/TodoContext';
import { IImportance, IMPORTANCE_GRADES } from '../../../util/Importance';
import Radio from './Radio';
import { DEFAULT_CATEGORIES } from '../../../util/Category';

interface ICategory{
    value: string;
    label: string;
}


const AddTodoBox : FC = () =>{

    const {todoItems, setTodoItems} = useContext(TodoContext);

    const [itemName, setItemName] = useState<string | null>(null);

    const [itemDescription, setItemDescription] = useState<string | null>(null);   

    const [category, setCategory] = useState<ICategory | null>(DEFAULT_CATEGORIES[0]);  

    const [importance, setImportance] = useState<IImportance>(IMPORTANCE_GRADES[0]);

    const [date, setDate] = useState<Date>(new Date());

    const addItemHandler : MouseEventHandler = () =>{
        alert("Clicked me!")
    }

    useEffect(()=>{
        console.log(category?.label);
    }, [category]);

    return(
        <div className="AddTodoBox SidepanelBox">
            <div className="BoxTitle">
                Add new item
            </div>
            <div className="InputFields">
                <label>Item name:
                    <input type="text" placeholder="Item name..." onChange={e => setItemName(e.target.value)}/>
                </label>
                <label>Description(optional):
                    <textarea cols={40} rows={5} placeholder="Description" onChange={e => setItemDescription(e.target.value)}></textarea>
                </label>
                <label>Category:
                    <Select options={DEFAULT_CATEGORIES} onChange={e => setCategory(e)} defaultValue={DEFAULT_CATEGORIES[0]}/>
                </label>
                <div className="Radiogroup">
                    <label>Importance:</label>
                    {
                        IMPORTANCE_GRADES.map(grade =>(
                            <Radio labelText={"~ "+grade.displayName}
                            name={"importance-radio"} 
                            style={{accentColor: grade.accentColor}}
                            value={JSON.stringify(grade)} 
                            checked={importance.value === grade.value} 
                            onChange={e => {setImportance(JSON.parse(e.target.value))}}
                            onHoverText={grade.onHoverText}
                            />
                        )

                        )
                    }
                </div>
                <label>Finish until:
                    <input type="date" onChange={e => setDate(new Date(e.target.value))}/>
                </label>

            </div>
            
            <Button text="Add" classes="Sidebox-button" onClick={addItemHandler}/>
        </div>
    )
}

export default AddTodoBox;
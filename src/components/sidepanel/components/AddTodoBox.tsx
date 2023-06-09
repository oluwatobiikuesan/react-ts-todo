
import React, {FC, MouseEventHandler,FormEventHandler, useEffect, useState, useContext} from 'react';
import Button from '../../shared/Button';
import Select from 'react-select';
import { TodoContext } from '../../../context/TodoContext';
import { IImportance, IMPORTANCE_GRADES } from '../../../util/Importance';
import Radio from './Radio';
import { DEFAULT_CATEGORIES, ICategory, Category } from '../../../util/Category';
import { Todo, TodoDate } from '../../../util/Todo';

import Modal from '../../shared/modals/Modal';
import { ItemAddedModal } from '../../shared/modals/ModalTypes';

import {SettingsContext} from '../../../context/SettingsContext';

const AddTodoBox : FC = () =>{

    const {todoItems, setTodoItems} = useContext(TodoContext);
    const {settings} = useContext(SettingsContext);

    const [itemName, setItemName] = useState<string>("");

    const [itemDescription, setItemDescription] = useState<string>("");   

    const [category, setCategory] = useState<ICategory>(DEFAULT_CATEGORIES[0]);  

    const [importance, setImportance] = useState<IImportance>(IMPORTANCE_GRADES[0]);

    const [date, setDate] = useState<string>("");

    const [allDay, setAllDay] = useState<boolean>(false);

    const [time, setTime] = useState<string>("");

    const [itemAddedModalVisible, setItemAddedModalVisible] = useState<boolean>(false);

    const onSubmit : MouseEventHandler = () =>{
        if(itemName.trim().length === 0){
            return;
        }

        if(date.trim().length === 0){
            return;
        }

        if(!allDay && time.trim().length === 0){
            return;
        }

        setTodoItems([...todoItems, 
            new Todo(itemName, itemDescription, category, new TodoDate(new Date(date), allDay, time), importance)]);
        

        if(settings.itemAddedPopUp){
            setItemAddedModalVisible(true);
        }
    }

    return(
        <div className="AddTodoBox SidepanelBox">
            <div className="BoxTitle">
                Add new item
            </div>
            <form className="InputFields">
                <label>Item name:
                    <input type="text" placeholder="Item name..." value={itemName} onChange={e => setItemName(e.target.value)}/>
                </label>
                <label>Description(optional):
                    <textarea cols={40} rows={5} value={itemDescription} placeholder="Description" onChange={e => setItemDescription(e.target.value)}></textarea>
                </label>
                <label>Category:
                    <Select<ICategory> options={DEFAULT_CATEGORIES} onChange={
                        option =>{
                            let opt = option as React.SetStateAction<ICategory>;
                            setCategory(opt);
                        }
                    } defaultValue={DEFAULT_CATEGORIES[0]}/>
                </label>
                <div className="Radiogroup">
                    <label title="How important this item is">Importance:</label>
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
                <label title="Todo item finish date">Finish until:
                    <input type="date" onChange={e => setDate(e.target.value)}/>
                </label>
                <label title="Todo item can be done all day or until a specified time">All day:
                    <input type="checkbox" style={{width: "auto", cursor: "pointer"}} checked={allDay === true} onChange={()=>setAllDay(!allDay)}/>
                </label>
                <label className={allDay ? "Visibility-hidden" : ""}>Time:
                    <input type="time" onChange={e => setTime(e.target.value)}/>
                </label>
            </form>
            
            <Button text="Add" classes="Sidebox-button" onClick={onSubmit}/>

            <Modal title={"New item!"} modelContent={<ItemAddedModal />} visible={itemAddedModalVisible} setVisible={setItemAddedModalVisible}/>
        </div>
        
    )
}

export default AddTodoBox;
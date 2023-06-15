
import React, {FC, MouseEventHandler,useRef, useEffect, useState, useContext, MutableRefObject} from 'react';
import Button from '../../shared/Button';
import Select from 'react-select';
import { TodoContext } from '../../../context/TodoContext';
import { IImportance, IMPORTANCE_GRADES } from '../../../util/Importance';
import Radio from './Radio';
import { DEFAULT_CATEGORIES, ICategory} from '../../../util/Category';
import { Todo, TodoDate } from '../../../util/Todo';

import Modal from '../../shared/modals/Modal';
import { ItemAddedModal, ItemDetailsErrorModal } from '../../shared/modals/ModalTypes';

import {SettingsContext} from '../../../context/SettingsContext';

const AddTodoBox : FC = () =>{

    const {todoItems, setTodoItems} = useContext(TodoContext);
    const {settings} = useContext(SettingsContext);

    const [itemName, setItemName] = useState<string>("");

    const [itemDescription, setItemDescription] = useState<string>("");   

    const [category, setCategory] = useState<ICategory>(DEFAULT_CATEGORIES[0]);  

    const [importance, setImportance] = useState<IImportance>(IMPORTANCE_GRADES[0]);

    const [date, setDate] = useState<string>("");
    const dateRef = useRef<HTMLInputElement>(document.createElement("input"));

    const [allDay, setAllDay] = useState<boolean>(false);

    const [time, setTime] = useState<string>("");

    const [itemAddedModalVisible, setItemAddedModalVisible] = useState<boolean>(false);
    const itemAddedModalRef = useRef<HTMLDivElement>(null);

    const [itemCannotBeAddedModalVisible, setItemCannotBeAddedModalVisible] = useState<boolean>(false);
    const itemCannotBeAddedModalRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        const handleClick = (e : any) :void =>{
            if(itemCannotBeAddedModalVisible && itemCannotBeAddedModalRef.current != null && !itemCannotBeAddedModalRef.current.contains(e.target)){
                setItemCannotBeAddedModalVisible(false);
            }

            if(itemAddedModalVisible && itemAddedModalRef.current != null && !itemAddedModalRef.current.contains(e.target)){
                setItemAddedModalVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return ()=>{
            document.removeEventListener("mousedown", handleClick);
        }

    }, [itemCannotBeAddedModalVisible, itemAddedModalVisible]);

    const resetInputs = () : void=>{
        setItemName("");
        setItemDescription("");
        dateRef.current.value = "";
        setAllDay(false);
        setTime("");
        setImportance(IMPORTANCE_GRADES[0]);
    }

    const onSubmit : MouseEventHandler = () =>{
        if((itemName.trim().length === 0)
        ||(date.trim().length === 0)
        ||(!allDay && time.trim().length === 0)){
            setItemCannotBeAddedModalVisible(true);
            return;
        }

        setTodoItems([...todoItems, 
            new Todo(itemName, itemDescription, category, new TodoDate(new Date(date), allDay, time), importance)]);
        
        resetInputs();

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
                            setCategory(option as React.SetStateAction<ICategory>);
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
                    <input ref={dateRef} type="date" onChange={e => setDate(e.target.value)}/>
                </label>
                <label title="Todo item can be done all day or until a specified time">All day:
                    <input type="checkbox" style={{width: "auto", cursor: "pointer"}} checked={allDay === true} onChange={()=>setAllDay(!allDay)}/>
                </label>
                <label className={allDay ? "Visibility-hidden" : ""}>Time:
                    <input type="time" value={time} onChange={e => setTime(e.target.value)}/>
                </label>
            </form>
            
            <Button text="Add" classes="Sidebox-button" onClick={onSubmit}/>

            <Modal innerRef={itemAddedModalRef} title={"New item!"} modalContent={<ItemAddedModal />} visible={itemAddedModalVisible} setVisible={setItemAddedModalVisible}/>
            <Modal innerRef={itemCannotBeAddedModalRef} title={"Wrong inputs!"} modalContent={<ItemDetailsErrorModal />} visible={itemCannotBeAddedModalVisible} setVisible={setItemCannotBeAddedModalVisible} />
        </div>
        
    )
}

export default AddTodoBox;
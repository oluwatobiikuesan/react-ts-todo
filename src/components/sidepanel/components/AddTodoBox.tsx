
import React, {FC, MouseEventHandler,useRef, useEffect, useState, useContext, MutableRefObject} from 'react';
import Button from '../../shared/Button';
import Select from 'react-select';
import { TodoContext } from '../../../context/TodoContext';
import { IImportance, IMPORTANCE_GRADES } from '../../../util/Importance';
import Radio from './Radio';
import { ICategory} from '../../../util/Category';
import { Todo, TodoDate } from '../../../util/Todo';

import Modal from '../../shared/modals/Modal';
import { ItemAddedModal, ItemDetailsErrorModal, ManageCategoriesModal } from '../../shared/modals/ModalTypes';

import {SettingsContext} from '../../../context/SettingsContext';
import { CategoryContext } from '../../../context/CategoryContext';

const AddTodoBox : FC = () =>{

    const {todoItems, setTodoItems} = useContext(TodoContext);
    const {settings} = useContext(SettingsContext);
    const {categories} = useContext(CategoryContext);

    const [itemName, setItemName] = useState<string>("");

    const [itemDescription, setItemDescription] = useState<string>("");   

    const [category, setCategory] = useState<ICategory>(categories[0]);  

    const [importance, setImportance] = useState<IImportance>(IMPORTANCE_GRADES[0]);

    const [date, setDate] = useState<string>("");
    const dateRef = useRef<HTMLInputElement>(document.createElement("input"));

    const [allDay, setAllDay] = useState<boolean>(false);

    const [time, setTime] = useState<string>("");

    const [itemAddedModalVisible, setItemAddedModalVisible] = useState<boolean>(false);
    const itemAddedModalRef = useRef<HTMLDivElement>(null);

    const [itemCannotBeAddedModalVisible, setItemCannotBeAddedModalVisible] = useState<boolean>(false);
    const itemCannotBeAddedModalRef = useRef<HTMLDivElement>(null);

    const [manageCategoriesModalVisible, setManageCategoriesModalVisible] = useState<boolean>(false);
    const manageCategoriesModalRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        const handleClick = (e : any) : void =>{
            if(itemCannotBeAddedModalVisible && itemCannotBeAddedModalRef.current != null && !itemCannotBeAddedModalRef.current.contains(e.target)){
                setItemCannotBeAddedModalVisible(false);
            }

            if(itemAddedModalVisible && itemAddedModalRef.current != null && !itemAddedModalRef.current.contains(e.target)){
                setItemAddedModalVisible(false);
            }

            if(manageCategoriesModalVisible && manageCategoriesModalRef.current != null && !manageCategoriesModalRef.current.contains(e.target)){
                setManageCategoriesModalVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return ()=>{
            document.removeEventListener("mousedown", handleClick);
        }

    }, [itemCannotBeAddedModalVisible, itemAddedModalVisible, manageCategoriesModalVisible]);

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
        ||(!allDay && time.trim().length === 0)
        || (new Date(date).setHours(0,0,0,0) < new Date().setHours(0,0,0,0))){
            setItemCannotBeAddedModalVisible(true);
            return;
        }

        setTodoItems([...todoItems, 
            new Todo(itemName, itemDescription, category, new TodoDate(date, allDay, time), importance, false)]);
        
        resetInputs();

        if(settings.itemAddedPopUp){
            setItemAddedModalVisible(true);
        }
    }

    const fillInput = () :void =>{
        setItemName("Test todo item");
        setItemDescription("This is a test todo item");
        dateRef.current.value="2023-07-12";
        setDate(dateRef.current.value);
        setAllDay(false);
        setTime("12:23");
    };

    return(
        <div className="AddTodoBox SidepanelBox">
            <div className="BoxTitle">
                Add new item
            </div>
            <form className="InputFields" onSubmit={e=>e.preventDefault()}>
                <label>Item name:
                    <input type="text" placeholder="Item name..." value={itemName} onChange={e => setItemName(e.target.value)}/>
                </label>
                <label>Description(optional):
                    <textarea cols={40} rows={5} value={itemDescription} placeholder="Description" onChange={e => setItemDescription(e.target.value)}></textarea>
                </label>
                <label className="Category-selector"><span>Category:</span>
                    <Select<ICategory> options={categories} onChange={
                        option =>{
                            setCategory(option as React.SetStateAction<ICategory>);
                        }
                    } defaultValue={categories[0]}/>
                    <button style={{cursor: "pointer"}} onClick={()=>{setManageCategoriesModalVisible(true)}}>Manage</button>
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
            {settings.adminTools ? <Button text="Fill" classes="Sidebox-button" onClick={fillInput} />: null}

            <Modal innerRef={itemAddedModalRef} title={"New item!"} modalContent={<ItemAddedModal />} visible={itemAddedModalVisible} setVisible={setItemAddedModalVisible}/>
            <Modal innerRef={itemCannotBeAddedModalRef} title={"Wrong inputs!"} modalContent={<ItemDetailsErrorModal />} visible={itemCannotBeAddedModalVisible} setVisible={setItemCannotBeAddedModalVisible} />
            <Modal innerRef={manageCategoriesModalRef} title={"Manage categories"} modalContent={<ManageCategoriesModal/>} visible={manageCategoriesModalVisible} setVisible={setManageCategoriesModalVisible} />
        </div>
        
    )
}

export default AddTodoBox;
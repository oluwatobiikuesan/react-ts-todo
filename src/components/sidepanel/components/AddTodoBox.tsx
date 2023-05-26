
import {FC, useState} from 'react';

const AddTodoBox : FC = () =>{

    const [itemName, setItemName] = useState<string | null>(null);
    const [itemDescription, setItemDescription] = useState<string | null>(null);


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
            </div>
            {itemName}
        </div>
    )
}

export default AddTodoBox;
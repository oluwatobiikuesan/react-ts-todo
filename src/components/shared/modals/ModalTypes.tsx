
import {FC, useState, useContext} from 'react';
import { SettingsContext } from '../../../context/SettingsContext';


export const ItemAddedModal : FC = ()=>{

    const [checked, setChecked] = useState<boolean>(false);
    const {settings, setSettings} = useContext(SettingsContext);

    const onChange : React.ChangeEventHandler<HTMLInputElement> = () : void =>{
        setChecked(!checked);
        setSettings({...settings, itemAddedPopUp: !settings.itemAddedPopUp});
    }

    return(
        <div className="Modal-content">
            <h2>New item successfully added</h2>
            <label>Don't show again
                <input type="checkbox" checked={checked} onChange={onChange}/>
            </label>
        </div>
    )
};

export const ItemDetailsErrorModal :FC = () =>{
    return(
        <div className="Modal-content">
            <h2>Check your inputs!</h2>
            <h3>Check the followings: </h3>
            <ol>
                <li>Item name is present</li>
                <li>The date must be today, or after today</li>
                <li>If it is not all day, provide a time</li>
            </ol>
        </div>
    );
};

export const AllTodoRemovedModal :FC = () =>{
    return(
        <div className="Modal-content">
            <h2>Your todo list is cleared</h2>
        </div>
    )
}


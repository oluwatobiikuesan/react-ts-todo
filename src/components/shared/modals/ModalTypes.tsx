
import {FC, useState, useContext} from 'react';
import { SettingsContext } from '../../../context/SettingsContext';

interface IItemAddedModal{
    
}

export const ItemAddedModal : FC<IItemAddedModal> = ()=>{

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


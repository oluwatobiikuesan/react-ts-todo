
import {FC} from 'react';

interface RadioProps{
    name: string;
    style: React.CSSProperties;
    value: any;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    labelText: string;
    onHoverText: string;
}

const Radio : FC<RadioProps> = props =>{
    return(
        <label title={props.onHoverText}>
            <input type="radio" name={props.name} style={props.style} value={props.value} onChange={props.onChange} checked={props.checked}/>
            <span>{props.labelText}</span>
        </label>
    )
};

export default Radio;
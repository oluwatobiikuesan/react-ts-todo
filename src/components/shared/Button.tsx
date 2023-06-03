import {FC, MouseEventHandler} from 'react';

interface ButtonProps{
    text: string;
    classes?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    props?: string[];
}

const Button : FC<ButtonProps> = (props : ButtonProps) => {
    return(
        <button className={`Button ${props.classes}`} onClick={props.onClick} {...props.props}>{props.text}</button>
    )
}

export default Button;
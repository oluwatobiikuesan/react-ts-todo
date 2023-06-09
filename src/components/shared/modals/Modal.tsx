
import {FC, useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import "../../../style/components_style/Modal.css";
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../Button';

interface IModal{
    title: string;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    modelContent: React.ReactNode;
}


const Modal : FC<IModal> = ({title, visible, setVisible, modelContent}) => {

    const {theme} = useContext(ThemeContext);
    

    return ReactDOM.createPortal(
        <div className={visible ? `Modal` : "Hide-modal"} id={theme}>
            <Button classes="Close-modal-button" text="Close" onClick={()=>{setVisible(false)}}></Button>
            <h1 className="Modal-title">{title}</h1>
            {modelContent}
        </div>,
    document.getElementById("modal-container") as Element);
};

export default Modal;
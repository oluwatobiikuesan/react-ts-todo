
import {FC, useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import "../../../style/components_style/Modal.css";
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../Button';

interface IModal{
    title: string;
}


const Modal : FC<IModal> = ({title}) => {

    const {theme} = useContext(ThemeContext);
    
    const [visible, setVisible] = useState<boolean>(true);

    const closeModal = () : void =>{
        setVisible(false);
    };


    return ReactDOM.createPortal(
        <div className="Modal" id={theme}>
            <Button classes='Close-modal-button' text="Close" onClick={()=>{closeModal()}}></Button>
            <h1 className="Modal-title">{title}</h1>
        </div>,
    document.getElementById("modal-container") as Element);
};

export default Modal;
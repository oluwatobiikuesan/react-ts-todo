import { FC, useContext, useState, useEffect, useRef } from "react";

import "../../style/components_style/Toppanel.css";
import ReactSwitch from "react-switch";

import { ThemeContext } from "../../context/ThemeContext";
import { TodoContext } from "../../context/TodoContext";
import Button from "../shared/Button";
import Modal from "../shared/modals/Modal";
import { AllTodoRemovedModal } from "../shared/modals/ModalTypes";
import TodoVisibilityController from "./components/TodoVisibilityController";


const Toppanel : FC = () =>{

    const {theme, toggleTheme} = useContext(ThemeContext);
    const {setTodoItems} = useContext(TodoContext);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(document.createElement("div"));

    const onDeleteItems = () : void =>{
        setTodoItems([]);
        setModalVisible(true);
    };

    useEffect(()=>{

        const handleClick = (e: any) : void =>{
            if(modalVisible && modalRef.current != null && !modalRef.current.contains(e.target)){
                setModalVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return ()=>{
            document.removeEventListener("mousedown", handleClick);
        }

    }, [modalVisible]);

    return(
        <div className="Toppanel">
            <div className="ThemeSwitch">
                <label>Toggle theme:
                    <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
                </label>
            </div>
            
            <Button text={"Clear all todo"} onClick={onDeleteItems}></Button>
            <Button text={"Save to server"} onClick={()=>alert("Not available...")}></Button>
            <TodoVisibilityController/>
            <Modal title="All item has been removed!" visible={modalVisible} setVisible={setModalVisible} modalContent={<AllTodoRemovedModal/>} innerRef={modalRef}/>
        </div>
    )

}

export default Toppanel;
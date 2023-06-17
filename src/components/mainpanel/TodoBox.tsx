

import {useContext, useState, FC} from 'react';
import { TodoContext } from '../../context/TodoContext';
import { ITodo } from '../../util/Todo';
import Button from '../shared/Button';

interface ITodoBox{
    todoItem : ITodo;
}

const TodoBox : FC<ITodoBox> = ({todoItem}) =>{
    const {setTodoItems} = useContext(TodoContext);

    const deleteItem = () : void =>{
        setTodoItems((existing)=>{
            return existing.filter(current => current.id !== todoItem.id);
        });
    }

    return(
        <div className={"Todo-item-box"}>
            <h2 className="Todo-name">{todoItem.name}
                <div className="Todo-importance" style={{backgroundColor: todoItem.importance.accentColor}}></div>
            </h2>
            
            {
                todoItem.description?.trim().length === 0 ? null  : <p className="Todo-description">{todoItem.description}</p>
            }
            <h3 className="Todo-category">{todoItem.category.label}</h3>
            <h3 className="Todo-due-date">Due until: {todoItem.date.date.toDateString()}</h3>
            <h3 className="Todo-all-day">All day: {todoItem.date.allDay ? "Yes" : "No"} </h3>
            {
                todoItem.date.allDay === false ? <h3>Time: {todoItem.date.time}</h3> : null
            }
            
            <Button text="Delete" onClick={deleteItem}/>
            
        </div> 
    );

};

export default TodoBox;
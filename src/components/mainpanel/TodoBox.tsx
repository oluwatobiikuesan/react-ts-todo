

import {useContext, FC} from 'react';
import { TodoContext } from '../../context/TodoContext';
import { ITodo } from '../../util/Todo';

interface ITodoBox{
    todoItem : ITodo;
}

const TodoBox : FC<ITodoBox> = ({todoItem}) =>{
    const {todoItems, setTodoItems} = useContext(TodoContext);

    return(
        <div className="Todo-item-box">
            <h2 className="Todo-name">{todoItem.name}</h2>
            {
                todoItem.description?.trim().length === 0 ? null  : <p className="Todo-description">{todoItem.description}</p>
            }
            
        </div> 
    );

};

export default TodoBox;
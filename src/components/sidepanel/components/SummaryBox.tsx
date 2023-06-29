
import {FC, useContext, useEffect, useState} from 'react';
import { TodoContext } from '../../../context/TodoContext';
import { IMPORTANCE_GRADES } from '../../../util/Importance';

const SummaryBox : FC = () =>{

    const {todoItems} = useContext(TodoContext);


    const [numberOfCompletedItems, setNumberOfCompletedItems] = useState<number>(0); 

    useEffect(()=>{
        setNumberOfCompletedItems(0);
        todoItems.forEach(item => {
            if(item.isCompleted){
                setNumberOfCompletedItems(previous => previous+1);
            }            
        })
    }, [todoItems]);

    return(
        <div className="SummaryBox SidepanelBox">
            <h2 className="BoxTitle">
                Summary
            </h2>
            <form className="InputFields">
                {
                    IMPORTANCE_GRADES.map((grade, idx) => {
                        let counter = 0;
                        todoItems.forEach(item => {
                            if(item.importance.value === grade.value){
                                counter++;
                            }
                        })
                        return(
                            <label key={idx}>Number of " {grade.displayName} " items: &nbsp;<span style={{color: grade.accentColor}}>{counter}</span></label>
                        )
                    })
                }

                <label>Number of completed items: {numberOfCompletedItems}</label>
                <label>Still due: {todoItems.length - numberOfCompletedItems}</label>
            </form>
            
        </div>
    )
}

export default SummaryBox;
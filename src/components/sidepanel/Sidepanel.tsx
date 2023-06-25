
import {FC} from 'react';
import "../../style/components_style/Sidepanel.css";
import AddTodoBox from './components/AddTodoBox';
import FilterBox from './components/FilterBox';
import SummaryBox from './components/SummaryBox';
import Footer from './components/Footer';


interface ISidePanel{
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidepanel : FC<ISidePanel> = ({isVisible, setVisible}) =>{

    //this panel covers the left side of the page
    // and contains all important input boxes:
    // AddTodoBox: user can add new todo item to the list
    // FilterBox: displayed todo items can be filtered, the filter can be set using this box
    // SummaryBox: a summary of the todos in the list, counted by importance


    return(
        <div className={isVisible ? "Sidepanel Sidepanel-visible" : "Sidepanel"}>
            <h1 className="Page-title">Todo app
                <button className="Close-sidepanel-button" onClick={()=>{setVisible(false);}}>Close
            </button></h1>
            
            <AddTodoBox />
            <FilterBox />
            <SummaryBox />
            
            <Footer />
        </div>
    )
}

export default Sidepanel;
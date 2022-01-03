import React from "react";
import '../components/TodoItem.css'
const TodoItem=(props)=>{
    return(
        <div onClick={()=>props.deleteItem(props.id)}>
            <li>{props.text}</li>
        </div>
    );

};

export default TodoItem;
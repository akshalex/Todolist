import React, { useState } from 'react'
import '../components/InputArea.css';
const InputArea=(props)=>{
    const [InputText, setInputText]=useState("");
    const handlechange=(e)=>{
        setInputText(e.target.value);
    };

    return(
        <div className='form'>
            <input type ='text'onChange={handlechange} value={InputText}/>
            <button onClick={()=>{
                props.addItems(InputText)
                 setInputText("")} }>
                <span>Add</span>
            </button>
        </div>
    );

};
export default InputArea;
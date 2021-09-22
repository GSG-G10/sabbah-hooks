import { useState } from "react";
import addTask from "./AddTask";

const Form = () => {
    const [value, setValue] = useState('')
    const updateVal = (e) => {
        setValue(e.target.value)
    }
 
    return (
        <div className="inputs">
      <input type="text" placeholder="Add your new task" id="inputFeild" onChange={updateVal} />
      <button id="add" onClick={() => addTask(value)}> Add <i className="fas fa-plus"></i></button>
    </div>
    )
}

export default Form;

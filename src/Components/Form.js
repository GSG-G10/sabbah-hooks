import { useState } from "react";
import addTask from "../functions/AddTask";

const Form = ({ taskAdded, setTaskAdded }) => { 
    // state to store input value
  const [value, setValue] = useState("");
  const updateVal = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="inputs">
      <input
        type="text"
        placeholder="Add your new task"
        id="inputFeild"
        onChange={updateVal}
      />
      <button id="add" onClick={() => addTask(value, taskAdded, setTaskAdded)}>
        {" "}
        Add <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;

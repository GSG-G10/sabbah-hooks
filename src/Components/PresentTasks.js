import { useState, useEffect } from "react";

const PresentTasks = ({ taskAdded }) => {
  const [tasks, addTask] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const deleteTask = () => {
    console.log("delete");
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    addTask(storage);
    return () => {
      console.log("hi");
    };
  }, [taskAdded, isChecked]);
  const handleChange = (key, value) => {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    const element = storage.filter((ele) => {
      return ele.id === Number(key);
    });
    setIsChecked(!isChecked);
    element[0].checked = value;
    return localStorage.setItem("tasks", JSON.stringify(storage));
  };
  if (tasks) {
    return tasks.map((ele) => {
      return (
        <li>
          {ele.task}
          <span>
            <input
              type="checkbox"
              id={ele.id.toString()}
              checked={ele.checked}
              onChange={(e) => handleChange(e.target.id, e.target.checked)}
            />
          </span>
          <span className="icon" onClick={deleteTask}>
            <i className="fas fa-trash"></i>
          </span>
        </li>
      );
    });
  } else {
    return <li>add tasks to show them here </li>;
  }
};

export default PresentTasks;

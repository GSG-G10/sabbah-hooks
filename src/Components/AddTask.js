const addTask = (value, taskAdded, setTaskAdded) => {
  if (value) { // check if there is a value from input
    let storage = JSON.parse(localStorage.getItem("tasks"));
    let newStorage = [];
    const newId = storage ? Number(storage[0].id) + 1 : 1; // set id 
    const newTask = { // create the object of task
      id: newId,
      task: value,
      checked: false,
    };
    if (storage) { // if there is old data
      storage.unshift(newTask);
      setTaskAdded(!taskAdded);
      return localStorage.setItem("tasks", JSON.stringify(storage));
    } else { // if this is the first task
      newStorage.unshift(newTask);
      setTaskAdded(!taskAdded);
      return localStorage.setItem("tasks", JSON.stringify(newStorage));
    }
  }
};

export default addTask;

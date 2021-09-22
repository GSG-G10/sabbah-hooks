const addTask = (value, taskAdded, setTaskAdded) => {
    if(value){

        let storage = JSON.parse(localStorage.getItem("tasks"));
        let newStorage = [];
        const newId = storage ? Number(storage[0].id) + 1 : 1;
        const newTask = {
          id: newId,
          task: value,
          checked: false,
        };
        if (storage) {
          storage.unshift(newTask);
          setTaskAdded(!taskAdded);
          return localStorage.setItem("tasks", JSON.stringify(storage));
        } else {
          newStorage.unshift(newTask);
          setTaskAdded(!taskAdded);
          return localStorage.setItem("tasks", JSON.stringify(newStorage));
        }
    }
};

export default addTask;

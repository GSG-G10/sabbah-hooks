const deleteTask = (id, taskAdded, setTaskAdded) => {
    console.log(id);
    const storage = JSON.parse(localStorage.getItem('tasks'));
    console.log(storage);
    const element = storage.filter(ele => ele.id === Number(id));
    console.log(element);
    const index = storage.indexOf(element[0]);
    console.log(index);
    if (index > -1) {
        storage.splice(index, 1)
        setTaskAdded(!taskAdded)
       return localStorage.setItem('tasks', JSON.stringify(storage))
    }
}

export default deleteTask;

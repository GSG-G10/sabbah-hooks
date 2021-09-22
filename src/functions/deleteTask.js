const deleteTask = (id, taskAdded, setTaskAdded) => {
    const storage = JSON.parse(localStorage.getItem('tasks'));
    if(storage.length <= 1){
        setTaskAdded(!taskAdded)
        return localStorage.removeItem('tasks')
    }
    const element = storage.filter(ele => ele.id === Number(id));
    const index = storage.indexOf(element[0]);
    if (index > -1) {
        storage.splice(index, 1)
        setTaskAdded(!taskAdded)
       return localStorage.setItem('tasks', JSON.stringify(storage))
    }
}

export default deleteTask;

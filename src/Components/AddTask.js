import { useState } from "react"
const AddTask = (value) => {
    const [data, setData] = useState('null')
    console.log(data);
    let storage = JSON.parse(localStorage.getItem('tasks'))
    let newStorage = []
    const newId = storage ? Number(storage[storage.length -1].id) +1 : 1
    const newTask = {
        id: newId,
        task: value,
        checked: false
    };
    if(storage) {
        storage.push(newTask)
        return localStorage.setItem('tasks',JSON.stringify(storage))
    }else {
        newStorage.push(newTask)
        return localStorage.setItem('tasks',JSON.stringify(newStorage))
    } 
}
export default AddTask;

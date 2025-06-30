import React, {useState, useEffect} from "react";
import ToDoItem from "./ToDoItem";
import FilterButtons from './FilterButtons'
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
    const [tasks, setTasks] = useState(() => {
        const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (loadedTasks){
            return loadedTasks
        } else {
            return []
        }
    });
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [newTask, setNewTask] = useState({title: ''});

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))


    }, [tasks])


    const handleChangeStatus = (id) => {
            const newTasks = tasks.map((task) => (
                task.id === id ? {...task, completed: !task.completed} : task
            ))
            setTasks(newTasks)
            setFilteredTasks(newTasks)
    }

    const handleDeleteTask = (id) => {
        const newTask = tasks.filter((task) => (
            task.id !== id
        ))
        setTasks(newTask)
        setFilteredTasks(newTask)
    }

    const handleFilter = (completed) => {
        completed === 'all' ? setFilteredTasks(tasks) : setFilteredTasks(tasks.filter((task) => 
            (task.completed === completed)
            ))   
    }

    const handleAddNewTask = (task) => {
        if (task){
            setTasks([...tasks, task])
            setFilteredTasks([...tasks, task])
        }
    }

    
    const unfilt = tasks.filter((task) => (
        task.completed == false
    ))
    const unfiltNum = unfilt.length
        

    
    return(
        <div className="todo-list">
            <h1 style={{borderBottom:'1px solid black'}}>To-Do Tasks</h1>
            <ToDoForm handleAddNewTask={handleAddNewTask} newTask={newTask} setNewTask={setNewTask}/>
            <FilterButtons handleFilter={handleFilter}/>
            <div className="tasks">
                <p className="count" style={{fontSize:'20px', padding:" 0 0 10px 0"}}>Осталось не выполнено: {unfiltNum}</p>
                {filteredTasks.map((task) => (
                    <ToDoItem 
                    key={task.id}
                    id={task.id} 
                    title={task.title} 
                    completed={task.completed} 
                    handleChangeStatus={handleChangeStatus}
                    handleDeleteTask={handleDeleteTask}
                    />
                ))}
                
            </div>    
        </div>
    )

}

export default ToDoList;
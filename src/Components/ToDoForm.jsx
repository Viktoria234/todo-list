import React, {useState, useRef} from "react";
import '../ToDoForm.css'

const ToDoForm = ({handleAddNewTask, newTask, setNewTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Date.now(),
            title: newTask.title,
            completed: false,
        }
        handleAddNewTask(task);
        setNewTask({ title: '' })
        
    }

    return(
        <div className="todo-form">
            <h2>Добавить новую задачу</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={newTask.title} 
                placeholder="Введите задачу" 
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                required/>
                <button type="submit">Подтвердить</button>
            </form>
        </div>
    )
}

export default ToDoForm;
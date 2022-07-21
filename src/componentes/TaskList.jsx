import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../css/TaskList.css';
import {v4 as uuidv4 } from 'uuid';

function TaskList() {
    const [tasks,setTasks] = useState([]);

    const findTask = (id) => { return tasks.map(task => task.id).indexOf(id); }; 

    const addTask = (aTask) => {
                        setTasks([ ...tasks, {id: uuidv4(), text: aTask, isCompleted: false}] );
                    };
    const markAsDone = (id) => {
                            const index = findTask(id);
                            tasks[index].isCompleted=!tasks[index].isCompleted;
                            setTasks([...tasks]);
    }     
    const removeTask = (id) => {
        
        setTasks(tasks.filter(task => task.id !== id));
    }                                                   
    return (
        <>
            <TaskForm newTaskFn={(t) => addTask(t)}/>
            <div className='task-list-container'>
                <ul className='task-bulleted-list'>
                { 
                    tasks.map( (task) => <li key={task.id}>
                                                <Task 
                                                    text={task.text} 
                                                    completed={task.isCompleted}  
                                                    id={task.id}
                                                    doneFn={markAsDone}
                                                    removeFn={removeTask}
                                                />
                                                </li> )
                }
                </ul>
            </div>
        </>
    );
}

export default TaskList;
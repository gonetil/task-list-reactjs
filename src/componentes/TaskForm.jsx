import React, { useState } from "react";
import '../css/TaskForm.css';

function TaskForm(props) {

    const [text, setText] = useState('');

    const addTask = (event) => {
        event.preventDefault();
        console.log(text);
        if (text.trim() != '')
            props.newTaskFn(text);
        setText('');
    }
    return (
        <form className="task-form">
            <input
                className="task-input"
                type='text'
                placeholder="Write your task here"
                name= 'text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='button-form' onClick={addTask}>
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
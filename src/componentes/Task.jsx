import React from "react";
import '../css/Task.css';
import { AiFillDelete } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

function Task({text, completed, id, doneFn, removeFn}) {
    return (
      <div className={'task-container' + (completed?' completed':'')}>
        <div className="task-text">
          {text}
        </div>
        <div className='task-actions'>
          <GiCheckMark className="task-icon" title={ 'Mark as '+(completed?'un':'')+'done'} onClick={()=>doneFn(id)}/>
          <AiFillDelete className="task-icon" title='Remove this task' onClick={()=>removeFn(id)}/>
        </div>
      </div>
    );
}

export default Task;
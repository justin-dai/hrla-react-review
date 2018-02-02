import React from 'react';
import Entry from './Entry.jsx'

const List = ({ tasks, onInputChange, addTask, doneTask }) => {

    return (
        <div>

            <input onChange={onInputChange}></input>
            <button onClick={addTask}> Add Task </button>

            <h3>Your Task</h3>
            <ul>
                {tasks.map((task, key) => (
                    <Entry 
                        task={task} 
                        key={key} 
                        index={key} 
                        doneTask={doneTask}
                    />
                ))}
            </ul>
        </div>
    )

}

export default List
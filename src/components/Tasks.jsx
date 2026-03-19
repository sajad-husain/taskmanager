import React, { useState } from 'react'

const Tasks = () => {
    const [task, setTask] = useState(['lean html', 'learn react', 'learn nodejs'])
    const [usertask, setUserTask] = useState('')

    function addTask() {
        const newtask = [...task, usertask]
        setTask(newtask)
        setUserTask('')
    }
    return (
        <div>
            <div><input type="text" placeholder='write task' value={usertask} onChange={e => setUserTask(e.target.value)} /> <button onClick={addTask}>Add Task</button></div>
            {task.map((item, index) => (<p key={index}>{item} <button>delete</button></p>))}
        </div>
    )
}

export default Tasks
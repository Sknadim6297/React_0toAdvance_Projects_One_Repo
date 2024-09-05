import React, { useState } from 'react'

function TaskList() {
    const [task, setTask] = useState(['Task 1', 'Task 2', 'Task 3'])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
      setTask([...task, newTask])
      setNewTask('')
    }
    
    const handleDelete = (index) => {
        const newTask=[...task]
        newTask.splice(index,1)
        setTask(newTask)
    }
  return (
    <div>
      <h1>Todo List</h1>
        <input type='text' value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Add Task'/>
        <button onClick={addTask}>Add</button>
    
        <ul>
         {
            task.map((taku,index)=>{
                return <li key={index}>
                      {taku}
                      <button onClick={handleDelete}>delete</button>
                </li>
             
            })
         }
        </ul>
    </div>
  )
}

export default TaskList

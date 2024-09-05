import React from 'react'
import Counter from '../Questions/counter'
import { Routes, Route } from 'react-router-dom'
import Index from '../Project-Links'
import FormHandeling from '../Questions/FormHandeling'
import TaskList from '../Questions/TaskList'

const index = () => {
  return (
    <div>
             <Routes>
            <Route path='/counter' element={<Counter />} />
            <Route path='/' element={<Index/>}/>
            <Route path='/form-handeling'  element={<FormHandeling/>} />
            <Route path='/task-list' element={<TaskList/>} />
        </Routes>
    </div>
  )
}

export default index


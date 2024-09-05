import React from 'react'
import Counter from '../Questions/counter'
import { Routes, Route } from 'react-router-dom'
import Index from '../Project-Links'
import FormHandeling from '../Questions/FormHandeling'
import TaskList from '../Questions/TaskList'
import ThemeChange from '../Questions/ThemeChange'
import SearchAbleList from '../Project-Links/SearchAbleList'

const index = () => {
  return (
    <div>
             <Routes>
            <Route path='/counter' element={<Counter />} />
            <Route path='/' element={<Index/>}/>
            <Route path='/form-handeling'  element={<FormHandeling/>} />
            <Route path='/task-list' element={<TaskList/>} />
            <Route path='Theme_change' element={<ThemeChange/>} />
            <Route path='search' element={<SearchAbleList/>} />
        </Routes>
    </div>
  )
}

export default index


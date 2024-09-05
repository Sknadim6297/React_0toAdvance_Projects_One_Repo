import React from 'react'
import Counter from '../Questions/counter'
import { Routes, Route } from 'react-router-dom'
import Index from '../Project-Links'

const index = () => {
  return (
    <div>
             <Routes>
            <Route path='/counter' element={<Counter />} />
            <Route path='/' element={<Index/>}/>
        </Routes>
    </div>
  )
}

export default index


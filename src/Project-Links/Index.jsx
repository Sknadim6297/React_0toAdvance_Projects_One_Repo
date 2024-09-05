import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div>
     <Link to='/counter' className='m-10'>Counter</Link>
     <br/>
     <Link to='/form-handeling' className='m-10'>Form Handeling</Link>
     <br/>
      <Link to='/task-list' className='m-10'>Task List</Link>
      <br/>
      <Link to='/Theme_change' className='m-10'>Theme Change</Link>
    </div>
  )
}

export default index

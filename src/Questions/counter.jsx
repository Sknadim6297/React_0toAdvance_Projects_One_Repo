import React, { useState } from 'react'

const App = () => {
  const [count , setCount]=useState(6);

  const incement = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count==0){
      alert("You can't go below 0")
      return
    }
    setCount(count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incement}>Incre</button>
      <button onClick={decrement}>Decre</button>
    </div>
  )
}

export default App

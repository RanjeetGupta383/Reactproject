import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setCounter]=useState(10)

  const addValue=() =>{
    console.log("Clicked",counter);
    counter=counter+1
    setCounter(counter)
   
  }

  const removeValue=() =>{
             setCounter(counter-1)
  }

  return (
    <>
      <h1>Ranjeet Gupta</h1>
      <h2>counter : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <h2>remove counter : {counter}</h2>
      <button onClick={removeValue}>Remove value :</button>
    </>
  )
}

export default App

import { useCallback, useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
     let pass=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if (numberAllowed) str +="0123456789"
     if (charAllowed) str +="!@#$%^&*-_=[]{}~`"
     for(let i=1;i<=lenght;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
     }
    
   setPassword(pass)

  },[lenght,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
   // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])

     useEffect(() => {
      passwordGenerator()
     },[lenght,numberAllowed,charAllowed,passwordGenerator])

  return (
       <div className='w-3/4 max-h-md mx-auto shadow-md rounded-lg px-4 my-6 py-4 bg-amber-300'>
       <h1 className='text-4xl text-center'>Password</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3  bg-red-50'
        placeholder='Password' readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 px-3 w- py-1'
        onClick={copyPasswordToClipboard}
        >copy</button>
          
        
       </div>

       <div className="flex">
        <div className='flex'>
          <input type='range' min={6} max={100} value={lenght}
           className='cursor-pointer'
            onChange={(e)=>{setLenght(e.target.value)}}/>
           <label>Lenght : {lenght}</label>
        </div>
        <div className='flex items-center gap-x-1 px-6'>
          <input type='checkbox' 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor='numberInput'>Numbers  {numberAllowed}</label>
        </div>

        <div className='flex items-center gap-x-1 px-6'>
          <input type='checkbox' 
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor='charInput'>Characters  {charAllowed}</label>
        </div>

       </div>
       
       </div>
  )
}

export default App
  
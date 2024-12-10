import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement,inputValue } from './assets/counterslice'
import {useState } from "react"

function Child() {
    const data=useSelector((store)=>store.counter)
    const [num,setNum]=useState("")
    const dispatch = useDispatch ()
    const changeCount=()=>{
      dispatch(inputValue(num))
      setNum("")
    }
  return (
    <>
      <h1>Redux Toolkit</h1>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <input type="number" onChange={(e)=>setNum(e.target.value)}value={num}></input>
      <button onClick={changeCount}>Change Count</button>

    </>
  )
}

export default Child

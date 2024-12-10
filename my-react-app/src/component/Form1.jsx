import React, {useState} from 'react'

function Form1() {
    const[username,setUsername]=useState("")
    const[text,setText]=useState("")
    function handelChange(event){
        setText(event.target.value)
    }

  return (
    <>
      <h1>Controlled From Component</h1>

      <input type="text" id ="my-input" value={text}
      onChange={handelChange}/>

      <h2>{text}</h2>
      <input type="text" id ="my-input" value={username}
      onChange={(e)=>setUsername(e.target.value)}/>


    </>
  )
}

export default Form1

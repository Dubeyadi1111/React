import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Todolist() {
    const [Todolist,setTodolist]=useState([])
    const [Task ,setTask]=useState("")
    const addTask =()=>{
        if (Task.trim()){
            let obj ={
                Task : Task,
                id : Math.trunc(Math.random()*1000)
            }
            setTodolist([...Todolist,obj])
        } else {
            alert("write here")
        }
        setTask("")
    }
    const deleteTask=(id)=>{
      console.log(id);
    }
  return (
    
    <>
      <div className="bg-secondary">
        <input type ="text" className="fore-control" placeholder="Write your task here.." onchange={(e)=>setTask(e.target.value)} value={("task")} />
        <button className='py-2 px-4 bg-success text-white fs-3'>Add</button>
      </div>
      <div className="container bg-light p-4">
        <div className="task d-flex justify-content-betwwen border border-dark my-2">
            <div className="fs-4 p-2">Hello world</div> 
            <div className='btn d-flex gap-3'>
                <button className='btn-outline-secondary'>Edit</button>
                <button className='btn-online-danger'>Delete</button>
                </div>
                </div>
            </div>
            <div className="container bg-light p-4 my-2">
            <div className="task d-flex justify-content-betwwen border border-dark my-2">
            <div className="fs-4 p-2">Hello world</div> 
            <div className='btn d-flex gap-3'>
                <button className='btn btn-outline-secondary'>Edit</button>
                <button className='btn btn-online-danger'>Delete</button>
            </div> 
             
        </div>
      </div>
    </>
  )
}

export default Todolist

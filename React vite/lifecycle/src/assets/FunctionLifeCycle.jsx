import React ,{useState,useEffect}from 'react'

function FunctionLifeCycle() {
    const[count,setCount]=useState(0)
    const[color,setColor]=useState("red")
    useEffect(()=>{
        console.log("1st syntax.. without second argruement");
    })
    useEffect(()=>{
        //this useEffect excutes only after intial render
        //this excutes in the mounting phase of a component
        console.log("useEffect 2 nd syntax.. with second arguement as empty array dependency");
    },[])
    useEffect(()=>{
        console.log("useEffect 3 nd syntax.. with third arguement as state/props dependecies array");
    },[count])
    useEffect(()=>{
        console.log("useEffect 4th syntax.. with returned function //cleanup function");
        return()=>{
            //this excutes in the unmounting phase of component
            //excutes before the useEffect() to cleanup the previous on going task /logic
            //similiar to comonentWillMount() method in class component
            console.log("the returned function")
        }
    })
  return (

    <>
      {console.log("render method")}
    
      <h1>Lifecycle is function component (useEffect hook ) </h1>
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={()=> setCount(count+1)}>change count</button>
      <button onClick={()=>setColor("blue")}>change color</button>
    </>
  )
}

export default FunctionLifeCycle

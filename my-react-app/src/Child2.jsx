import React , {useState} from 'react'

function Child2() {
    const [count,setCount]=useState(1)

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }

  return (
    <>
     {console.log("hi from function")}
     <div>
     <button onClick={this.increment}>+</button>
            <b>{this.state.count}</b>
            <button onClick={this.decrement}>-</button>
     </div>
     
    </>
  )
}

export default Child2

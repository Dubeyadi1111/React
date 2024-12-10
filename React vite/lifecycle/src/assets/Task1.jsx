// import React ,{useEffect, useState} from 'react'

// function Task1() {
//     const [count,setCount] =useState(0)
//     const [color,setColor] =useState("black")
//     const increment=()=>{
//         setCount(count + 1)
//     }
//     const decrement=()=>{
//         setCount(count - 1)
//     }
//     useEffect(()=>{
//         if (count % 2 == 0) {
//             setColor("blue")
//         } else {
//             setColor("red")
//         }
//     },[count])


//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <h1 style ={{color:color}}>{count}</h1>
//       <button onClick={decrement}>-</button>

//     </>
//   )
// }

// export default Task1

import React, { useEffect, useState } from 'react';

function Task1() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black");

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        if (count % 2 === 0) {
            setColor("blue");
        } else {
            setColor("red");
        }
    }, [count]);

    return (
        <>
            <button onClick={increment}>+</button>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default Task1;


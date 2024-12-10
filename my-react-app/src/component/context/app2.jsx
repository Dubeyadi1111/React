import React, { useContext } from 'react'
import myContext from './myContext'
const app2 =()=> {
    const data=useContext(myContext)
  return (
    <>
      <h3>app2 component</h3>
      <h1>{data}</h1>
    </>
  )
}

export default app2

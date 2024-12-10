import React, { useContext } from 'react'
import myContext from './myContext'
const child2 =()=> {
    const data=useContext(myContext)
  return (
    <>
      <h3>child2 component</h3>
      <h1>{data}</h1>
    </>
  )
}

export default child2

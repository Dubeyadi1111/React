import React from 'react'

function Childrenprops(props) {
  console.log(props);
  return (
    <div>
      <h1>Children Props In Function Component</h1>
      <h2>{props.children}</h2>
      {
        props.children.map(ele=>{
          return <h2>{ele}</h2>
        })
      }
    </div>
  )
}

export default Childrenprops


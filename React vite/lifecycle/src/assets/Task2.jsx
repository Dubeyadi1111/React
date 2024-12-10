import React, { useEffect , useState} from 'react'

function Task2() {
    const url ="https://jsonplaceholder.typicode.com/users"
    const[data, setData]=useState([])
     useEffect(()=> {
       fetch(url).then((response)=>response.json())
      .then(users => setData (users))
      .catch(error => console.log(error))
     },[])
  return (
    <>
      {console.log("render")}
      <h1>Fetching Data in React</h1>
      
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>

            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>


    </>
  )
}

export default Task2

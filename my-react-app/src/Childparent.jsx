
import React from 'react';



function Childparent(props) {
  const { user, sendData } = props;
  let userName = "Tony Stark";

  const clickHandle = () => {
    sendData(userName);  
  }

  return (
    <div>
      <h1>Sending data from Child to Parent</h1>
      <h2>{user}</h2>
      <button onClick={clickHandle}>sendData</button>
    </div>
  );
}


export default Childparent;

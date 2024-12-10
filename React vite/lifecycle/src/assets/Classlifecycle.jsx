
import React, { Component } from "react"; 

class Classlifecycle extends Component {
  constructor(){
    super ()
    this.state={
      name:"virat",
      count:0
    }
  }
    static getDerivedStateFrom(props,state){
        console.log("This is getDerivedStateFromprops ()");

        //this is the second method of mounting phase
        //used to change the state by using props values
        //this is also the 1st method of updating phase
        return {name:props.name}
    }
    componentDidMount(){
        //the 

        console.log("this is componentDidMount()");

    }
    shouldComponentUpdate(){
        console.log("this is should componentupdate()");
        return true
    }
     getSnapshotBeforeUpdate(){
        //the 
        console.log("this is napshotBeforeUpdate()");
        console.log(prevProps,prevState);
        return "adsf"
    }
    componentDidUpdate(){
      console.log("this is componentDidUpdate()");
    }
    componentWillUnmount(){
      //this is the method of unmounting phase
      //this method excutes right before the component is going to remove from Dom
      console.log("componentWillUnmount()");
    }
    render()  {
    console.log("this is render()");
    return(
      <>
      <h1> Class component </h1>
      <h2>name:{this.state.name}</h2>
      <h2>count:{this.state.count}</h2>
      <h2>props Name:{this.state.name}</h2>
      <button>change count</button>

      </>
    )
  }
}

export default Classlifecycle
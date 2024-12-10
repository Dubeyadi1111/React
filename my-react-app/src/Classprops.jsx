import React, { Component } from 'react'

export class Classprops extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>props in class component</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.props.user.name}</h3>
        <h3>{this.props.user.age}</h3>
      </div>
    )
  }
}

export default Classprops

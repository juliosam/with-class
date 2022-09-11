import React, { Component } from 'react'

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1985
    }
  }
  change = () => {
    this.setState({color: "blue"})
  }
  
  render() {
    return (
      <div>
        <h2>My {this.state.brand}</h2>
        <p onClick={this.change}>
          Is a {this.state.year} {this.state.color} {this.state.model}
        </p>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Fetch extends Component {
  constructor(props){
    super(props);
    this.state = {
        data : []
    }
  }

  async componentDidMount(){
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data)
      this.setState({data : data.slice(3,6)})

    } catch (error) {
      console.log(error.message)
    }
    
  }

  render() {
    return (
      <div className='fetched'>
        <ul>
          {this.state.data.map(item => {
            return(
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

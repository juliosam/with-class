import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      oninput : "",
      taskList : []
    };
  }

  //method to update the input content, called onchange
  writing(key,value){
    this.setState({
      [key]: value
    })
    console.log(this.state)
  }

  //method to add a new item to de todo array
  addTask(e){
    e.preventDefault()
    
    const oninput = {
      id: 1 + Math.random(),
      value: this.state.oninput.slice()
    }
    
    const taskList = [...this.state.taskList];

    taskList.push(oninput);

    this.setState({
      taskList,
      oninput:""
    })
  }
  
  render() {
    return (
      <div>
        <form className='todo-list' onSubmit={e => this.addTask(e)}>
          <label>Write task</label>
          <input
            type="text"
            value={this.state.oninput}
            onChange={e => this.writing("oninput", e.target.value)}
          />
          <button>Add</button>
        </form>
        <ul>
          {
            this.state.taskList.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

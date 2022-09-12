import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      oninput : "",
      taskList : []
    };
  }
  writing(e){
    this.setState.oninput(e.target.value)
  }
  addTask(e){
    e.preventDefault()
    this.setState.taskList([...this.state.taskList, this.state.oninput])
    this.setState.oninput("")
  }

  render() {
    return (
      <form className='todo-list' onSubmit={this.addTask}>
        <label>Write task</label>
        <input
          type="text"
          value={this.state.oninput}
          onChange={this.writing}
        />
        <button>Add</button>
      </form>
    )
  }
}

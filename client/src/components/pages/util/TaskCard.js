import React, {Component} from 'react'
import '../styles/CardsStyle.css'

  class TaskCard extends Component{

    state = {
      task: [], //from db
      inputText: ''
    }

    addSubmit = (e) =>{
      e.preventDefault()
      let newTask = this.state.inputText
      this.setState(prevState => ({
        task: [...prevState.task, newTask]
      }))
      console.log(this.state.task);
    }



    onInputChange = (e) =>{
      this.setState({inputText: e.target.value})
    }

    render(){
      return(
      <div className="ui card center-text">
        <div className="content">
          <div className="header">Task</div>
        <div className="description">
          <p>{this.state.task.map((task, i) => <li id={i}>{task}</li>)}</p>
        </div>
        </div>
        <form className='ui form' onSubmit={this.addSubmit}>
          <input className='form-text-input' value={this.state.inputText} onChange={this.onInputChange} type="text"/>
          <button className='ui button add-btn'>Add</button>
        </form>
      </div>
    )
  }
}

export default TaskCard

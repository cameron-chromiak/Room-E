import React, {Component} from 'react'
import '../styles/CardsStyle.css'

  class TaskCard extends Component{

    state = {
      task: [],
      inputText: ''
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addSubmitTask(this.state.inputText)
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
          <p>{this.props.task.map((task, i) => <li key={i}>{task}</li>)}</p>
        </div>
        </div>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <input className='form-text-input' value={this.state.inputText} onChange={this.onInputChange} type="text"/>
          <button className='ui button add-btn'>Add</button>
        </form>
      </div>
    )
  }
}

export default TaskCard

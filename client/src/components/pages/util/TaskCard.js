import React, {Component} from 'react'
import '../styles/CardsStyle.css'

  class TaskCard extends Component{

    state = {
      members: ['John', 'Ron']
    }


    displayMembers = () =>{
      this.state.members.map(member =>{
        return member
      })
    }

    render(){
      return(
      <div className="ui card center-text">
        <div className="content">
          <div className="header">{this.state.members.map(member => <li>{member}</li>)}</div>
        <div className="description">
          <p></p>
        </div>
        </div>
        <form className='ui form'>
          <input className='form-text-input' type="text"/>
          <button className='ui button add-btn'>Add</button>
        </form>
      </div>
    )
  }
}

export default TaskCard

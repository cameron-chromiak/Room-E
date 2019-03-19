import React, {Component} from 'react'
import Axios from 'axios'
// import API_BASE_URL from '../configs'
import MembersCard from './util/MembersCard'
import TaskCard from './util/TaskCard'
import './styles/BuildCss.css'
import ControlMenu from './util/ControlMenu'

class BuildTool extends Component{

  state={
    members: [],
    task: [],
    id: null
  }

  getTask = (newTask) =>{
    let task = [...this.state.task]
    task.push(newTask[0])
    this.setState({task})
    }

  getMember = (newMember) =>{
    let members = [...this.state.members]
    members.push(newMember[0])
    this.setState({members})
  }


  addSubmit = (inputText) =>{    // let newMember = this.state.inputText
    console.log(inputText)
    this.setState({
      members: [...this.state.members, inputText],
      inputText: ''
    })
  }


  renderCards = () =>{
    return(
      <div className='ui two column centered grid'>
        <div className='row'>
          <div className='column'>
            <MembersCard members={this.state.members} addSubmit={this.addSubmit} getMember={this.getMember}/>
          </div>
          <div className='column'>
            <TaskCard getTask={this.getTask}/>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div>
          {this.renderCards()}
      </div>
    )
  }
}

export default BuildTool

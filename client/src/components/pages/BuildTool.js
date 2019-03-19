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
    id: this.props.match.params.id,
    assign: {}
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


  addSubmitMember = (inputText) =>{
    // console.log(inputText)
    this.setState({
      members: [...this.state.members, inputText],
      inputText: ''
    })
  }
  addSubmitTask = (inputText) =>{
    console.log(inputText)
    this.setState({
      task: [...this.state.task, inputText],
      inputText: ''
    })
  }

  onSaveSubmit = (e) =>{
    e.preventDefault()
    let data = {
      members: this.state.members,
      task: this.state.task,
      id: this.state.id
    }
  //   Axios.post('/house/build', {data})
  //     .then(res => console.log(res))
  //     .catch(err => console.log('ERROR: ',err))
  }

  assignTask = () =>{
    let members = this.state.members
    let task = this.state.task
    let arr = []

    for(let j=0; j<task.length; j++){
      let ranTask = task[Math.floor(Math.random()*task.length)]
      console.log('cc',ranTask);
    }

    for(let i=0; i<members.length; i++){
      let member = members[i]
      arr.push({member:null})
    }
    console.log(arr);
  }


  renderCards = () =>{
    return(
      <div className='ui two column centered grid'>
        <div className='row'>
          <div className='column'>
            <MembersCard members={this.state.members} addSubmitMember={this.addSubmitMember} getMember={this.getMember}/>
          </div>
          <div className='column'>
            <TaskCard  task={this.state.task} addSubmitTask={this.addSubmitTask} getTask={this.getTask}/>
          </div>
        </div>
        <div className="menu-container">
          <form onSubmit={this.onSaveSubmit} className='ui'>
            <button className='ui button green'>Save</button>
          </form>
          <button onClick={this.assignTask} className='ui button primary'>Shuffle</button>
        </div>
      </div>
    )
  }

  render(){
    console.log('from BuildTool:', this.state)
    return(
      <div>
          {this.renderCards()}
      </div>
    )
  }
}

export default BuildTool

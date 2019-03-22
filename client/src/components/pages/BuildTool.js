import React, {Component} from 'react'
import Axios from 'axios'
// import API_BASE_URL from '../configs'
import MembersCard from './util/MembersCard'
import TaskCard from './util/TaskCard'
import './styles/BuildCss.css'
import ControlMenu from './util/ControlMenu'
const SERVER_URL = "https://room-e.herokuapp.com/api"
class BuildTool extends Component{


  state={
    members: [],
    task: [],
    id: this.props.match.params.id
  }
  // load member and chore data
  componentDidMount(){

    Axios.get(`${SERVER_URL}/house/build/${this.props.match.params.id}`)
      .then(res=>{
        console.log(res)
        this.setState({
          members:res.data.house.people,
          task: res.data.house.task
        })
      })
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
    let newName = {name: inputText, task: []}
    this.setState({
      members: [...this.state.members, newName],
      inputText: ''
    })
  }
  addSubmitTask = (inputText) =>{
    // console.log(inputText)
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
    Axios.post(`https://room-e.herokuapp.com/api/house/build/${this.state.id}`, {data})
      .then(res => console.log(res))
      .catch(err => console.log('ERROR: ',err))
  }

    onDeleteDoc = (e) =>{
      console.log('x');
      e.preventDefault()
      Axios.delete(`https://room-e.herokuapp.com/api/house/delete/${this.state.id}`)
        .then(res => this.props.history.push(`/dashboard`))
        .catch(err => console.log('ERROR: ',err))
      }

//handle click removeItem
  // removeItem = (i) =>{
  //   let temp = [...this.state.members]
  //   temp.splice(i, 1)
  //   this.setState({
  //     members:temp
  //   })
  //   console.log(this.state.members);
  // }

  assignTask = () =>{
    let members = [...this.state.members]
    let tasks = [...this.state.task]
    let users = []
    let i = 0;

     while(tasks.length > 0){
        // console.log(tasks.length);
     let randomTask = tasks.splice(Math.floor(Math.random()*tasks.length)-1, 1)[0]
      if(i >= members.length) {i = 0 }
          // console.log( members[i])
         members[i].task.push(randomTask)
         i++;
     }
     this.setState({members})//////
  }


  // renderEachTask = (tasks) => {
  //     console.log(tasks,'234567')
  //     return tasks.map(task=>{ console.log('ahhh',task) })
  // }

  renderTask = () =>{
    return(
      this.state.members.map(member =>{
        // console.log(member)
       return (
         <span>
         <li>{member.name}</li>
         <ll>{member.task.join(',')}</ll>
         <hr />
         </span>
        )
      })
    )
  }
//  renderTask = () =>{
  //   return(
  //     this.state.members.map(member =>{
  //      return <li>{member.name}</li>
  //       member.map(task =>{
  //         return <p>{task.task}</p>
  //       })
  //     })
  //   )
  // }


  renderCards = () =>{
          console.log(this.state.members)
    return(
      <div className='ui two column centered grid'>
        <div className='row'>
          <div className='column'>
            <MembersCard members={this.state.members} addSubmitMember={this.addSubmitMember} getMember={this.getMember}/>
          </div>
          <div className='column'>
            <TaskCard  task={this.state.task} addSubmitTask={this.addSubmitTask} getTask={this.getTask}/>
          </div>
          <div className="assign-container ui card center-text">
            <div className="name-container">
              <div>
                {this.renderTask()}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <form onSubmit={this.onSaveSubmit} className='ui'>
            <button className='ui button green'>Save</button>
          </form>
          <div>
            <button onClick={this.assignTask} className='ui button blue'>Mix</button>
          </div>
          <form className='btn-delete' onSubmit={this.onDeleteDoc}>
            <button className='ui button red'>Delete</button>
          </form>
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

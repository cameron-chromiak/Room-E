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

  componentDidMount(){
    // console.log(this.props.match.params.id);
    Axios.get(`http//localhost:5000/api/house/details/${this.props.match.params.id}`).then(
      res =>{
        console.log(res);
      }
    )
  }


  renderCards = () =>{
    return(
      <div className='ui two column centered grid'>
        <div className='row'>
          <div className='column'>
            <MembersCard getMember={this.getMember}/>
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
        <ControlMenu buildConfig={this}/>
      </div>
    )
  }
}

export default BuildTool

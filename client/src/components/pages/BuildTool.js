import React, {Component} from 'react'
import Axios from 'axios'
// import API_BASE_URL from '../configs'
import MembersCard from './util/MembersCard'
import TaskCard from './util/TaskCard'
import './styles/BuildCss.css'


class BuildTool extends Component{


  state={
    // location: location
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
      <div className='ui four column centered grid'>
        <div className='row'>
          <div className='column'>
            <MembersCard/>
          </div>
          <div className='column'>
            <TaskCard/>
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

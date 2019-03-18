import React, {Component} from 'react'
import Axios from 'axios'
// import API_BASE_URL from '../configs'
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


// TODO: Push to House collection
addTaskUi = () =>{
  return(
    <div>

    </div>
  )
}

  render(){
    return(
      <div>
          <TaskCard/>
          {this.addTaskUi()}
      </div>
    )
  }
}

export default BuildTool

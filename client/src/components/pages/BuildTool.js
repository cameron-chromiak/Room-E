import React, {Component} from 'react'
import Axios from 'axios'
// import API_BASE_URL from '../configs'
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
  buildTaskCard = ()=>{
    return(
      <div class="ui card center-text">
  <div class="content">
    <div class="header">Members</div>
    <div class="description">
      <p></p>
    </div>
  </div>
  <div class="extra content">
      
  </div>
</div>
    )
  }

  render(){
    return(
      <div>
          {this.buildTaskCard()}
      </div>
    )
  }
}

export default BuildTool

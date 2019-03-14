import React, {Component} from 'react'
import Axios from 'axios'
// import API_BASE_URL from '../configs'


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

  render(){
    return(
      <div>Build</div>
    )
  }
}

export default BuildTool

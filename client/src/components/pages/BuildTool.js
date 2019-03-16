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


// TODO: Push to House collection
addTaskUi = () =>{
  return(
    <div>
      <h2>Dashoard</h2>
      <div className="ui four column doubling stackable grid container">
        <div className="column">
            {/*{this.renderHomes}*/}
        </div>
      </div>
      <div className="ui raised very padded text container segment">
        <h3>Create a new Home</h3>
        <form className="ui form">
          <div className="field">
            <label>House Name</label>
            <input type="text"value={this.state.HouseName} onChange={this.handleInputChange}/>
          </div>
            <button className='ui button btn' onClick={(e) => this.handleSubmit(e)}>Create</button>
        </form>
      </div>
    </div>
  )
}

  render(){
    return(
      <div>
          {this.buildTaskCard()}
          {this.addTaskUi()}
      </div>
    )
  }
}

export default BuildTool

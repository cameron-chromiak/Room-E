import React, {Component} from 'react'
import api from '../../../api';
import '../styles/ControlStyles.css'

class ControlMenu extends Component{

  state = {
    members: [],
    task: [],
    id: null
  }

  onSave = (e) =>{
    console.log('save');
    e.preventDefault()
    let data = {
      members: this.state.members,
      task: this.state.task,
      id: this.state.id
    }
    api.saveHome(data)
      .then(result => {
        console.log('Home Saved!',result)
        // this.props.history.push("/")
      })
      .catch(err => console.log('err from controlmenu', err))
  }


  getDerivedStateFromProps(){
    console.log('ControlMenu', this.props.buildConfig.state.members[0])
    console.log('state', this.state)
    this.setState({
        id: this.props.buildConfig.props.match.params.id,
        // members: this.props.buildConfig.state.members,
        // task: this.props.buildConfig.state.task
    })
  }


  render(){
    return(
      <div>
        <div className="ui very padded segment menu-container">
          <div className="inline">
          <form action="" onSubmit={this.onSave}>
            <button type='submmit' className="ui primary button">Save</button>
          </form>

            <button className="ui button">Shuffle</button>
            <button className="ui button red">Delete</button>
        </div>
        </div>
      </div>
    )
  }
}


export default ControlMenu

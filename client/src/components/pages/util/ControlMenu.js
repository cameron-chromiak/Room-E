import React, {Component} from 'react'

import '../styles/ControlStyles.css'

class ControlMenu extends Component{

  state = {
    members: [],
    task: [],
    id: []
  }

  componentDidMount(){
          console.log('ControlMenu', this.props.buildConfig);
    this.setState({
        id: this.props.buildConfig.props.match.params.id,
        members: this.props.buildConfig.state.newMember,
        task: this.props.buildConfig.state.newTask
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <div className="ui very padded segment menu-container">
          <div className="inline">
            <div className="ui primary button">Save</div>
            <div className="ui button">Shuffle</div>
            <div className="ui button red">Delete</div>
        </div>
        </div>
      </div>
    )
  }
}

export default ControlMenu

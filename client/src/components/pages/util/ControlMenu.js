import React, {Component} from 'react'

import '../styles/ControlStyles.css'

class ControlMenu extends Component{


  render(){
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

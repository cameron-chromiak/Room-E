import React, {Component} from 'react'

import '../styles/ControlStyles.css'

class ControlMenu extends Component{


  render(){
    return(
      <div>
        <div class="ui very padded segment menu-container">
          <div class="inline">
            <div class="ui primary button">Save</div>
            <div class="ui button">Shuffle</div>
            <div class="ui button red">Delete</div>
        </div>
        </div>
      </div>
    )
  }
}

export default ControlMenu

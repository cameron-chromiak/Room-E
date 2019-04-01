import React, { Component } from 'react';
import './styles/DashboardStyle.css'
export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div>
        <div className="landing-container">
          <div className="landing-text">
            <h1 className="ui header-lg">Welcome</h1>
            <p className="ui header-md">This is RoomE. As way to simplify life with your roomates</p>
          </div>
        </div>


      </div>
    );
  }
}

import React, { Component } from 'react';
import api from '../../api';
import Axios from 'axios'
import { Route, Redirect } from 'react-router'



export default class Dashoard extends Component {

  componentDidMount(){
    console.log(api.isLoggedIn())
    Axios.get('http://localhost:5000/api/dashboard', {withCredentials: true})
      .then(res=>{
        console.log(res)
      })
  }




  showDashboard = () => {
    if(api.isLoggedIn()){
      return (
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
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name"/>
            </div>
          </form>
        </div>
        </div>
      )
    }
    else {
      return (
        <div>
        <Redirect to="/"/>
          {/*{setTimeout(<Redirect to="/"/>, 1000)}*/}
        </div>
      )
    }
  }

  render() {


    return (
      <div className="Countries">
          {this.showDashboard()}
      </div>
    );
  }
}

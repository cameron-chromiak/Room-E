import React, { Component } from 'react';
import api from '../../api';
import Axios from 'axios'
import { Route, Redirect } from 'react-router'



export default class Dashoard extends Component {

  componentDidMount(){
    console.log(this)
    Axios.get('http://localhost:5000/api/dashboard', {withCredentials: true})
      .then(res=>{
        console.log(res)
      })
  }

  showDashboard = () => {
    if(this.props.stuff.isLoggedIn){
      return (
        <div>
        <h2>Dashoard</h2>
        <div class="ui four column doubling stackable grid container">
  <div class="column">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sequi omnis et sunt corrupti non, dignissimos labore sapiente illum, veritatis, laborum amet aliquid atque vel.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sequi omnis et sunt corrupti non, dignissimos labore sapiente illum, veritatis, laborum amet aliquid atque vel.</p>
  </div>
</div>
        <div className="ui raised very padded text container segment">
        <h3>Create a new Home</h3>
          <form class="ui form">
            <div class="field">
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

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

        </div>
      )
    }
    else {
      return (
        <div>
          login
          {/*<Redirect to="/"/>*/}
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

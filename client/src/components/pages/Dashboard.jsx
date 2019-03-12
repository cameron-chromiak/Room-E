import React, { Component } from 'react';
import api from '../../api';
import Axios from 'axios'
import { Route, Redirect } from 'react-router'



export default class Countries extends Component {

  componentDidMount(){
    Axios.get('http://localhost:5000/api/dashboard', {withCredentials: true})
      .then(res=>{
        console.log(res)
        //this.setState({country:res.data.countriesFromDb})
      })
  }

  showDashboard = () => {
    if(this.props.isLoggedIn){
      return (
        <div>
          <h2>Dashoard</h2>

        </div>
      )
    }
    else {
      return (
        <div>
          <Redirect to="/"/>

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

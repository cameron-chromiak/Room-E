import React, { Component } from 'react';
import api from '../../api';
import Axios from 'axios'
import { Route, Redirect } from 'react-router'



export default class Dashoard extends Component {

  state={
    HouseName: ''
  }

  componentDidMount(){
    console.log(api.isLoggedIn())
    Axios.get('http://localhost:5000/api/dashboard', {withCredentials: true})
      .then(res=>{
        console.log(res)
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(!this.state.HouseName){
      console.log('You need a house name');
    }else{
      {/*console.log(this.state.HouseName);*/}
      let data = {
        HouseName: this.state.HouseName
      }
      // TODO: SEND THIS TO DB W/ USER ID
    //   api.createHouse(data)
    //     .then(result => {
    //       console.log('House Created!!',result)
    //       this.props.history.push("/dashboard") // Redirect to the home page
    //     })
    //     .catch(err => this.setState({ message: err.toString() }))
    // }
  }
}

  handleInputChange = (e) =>{
    this.setState({HouseName: e.target.value})
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
              <input type="text"value={this.state.HouseName} onChange={this.handleInputChange}/>
            </div>
              <button className='ui button btn' onClick={(e) => this.handleSubmit(e)}>Create</button>
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
      <div>
          {this.showDashboard()}
      </div>
    );
  }
}

import React, { Component } from 'react';
import api from '../../api';
import Axios from 'axios'
import {Redirect } from 'react-router'
import {Link} from 'react-router-dom';
import './styles/DashboardStyle.css'


export default class Dashoard extends Component {

  state={
    ExistingHouses: []
  }

  componentDidMount(){
    // console.log(api.isLoggedIn())
    Axios.get('http://localhost:5000/api/dashboard', {withCredentials: true})
      .then(res=>{
        this.setState({ExistingHouses:res.data.houses})
          // console.log('Dashoard State',this.state.ExistingHouses)
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(!this.state.HouseName){
      console.log('You need a house name');
    }else{
      let data = {
        HouseName: this.state.HouseName
      }
      Axios.post('http://localhost:5000/api/house', data)
        .then(res =>{
          // console.log('RES', res)
          this.props.history.push(`house/build/${res.data.house._id}`)
      })
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
                <label>House Name</label>
                <input type="text"value={this.state.HouseName} onChange={this.handleInputChange}/>
              </div>
                <button className='ui button btn' onClick={(e) => this.handleSubmit(e)}>Create</button>
            </form>
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <div>
        <div>
        {this.showDashboard()}
        {fireRedirect && (
        <Redirect to={'/house/build'}/>
      )}
        </div>
        <div className="card-container">
        {this.state.ExistingHouses.map((house, i) =>{
          // console.log(house);
          return (
            <div className='ui cards'>
              <div className='card'>
                  <div className="content">
                  <div className="header">
                    <Link key={i} to={`/house/build/${house._id}`}>{house.HouseName}</Link>
                  </div>
                  {/*<div class="meta">
                    {if (house.people){
                      return('People')
                    }else{
                      return('No one')
                    }}
                  </div>
                  <div class="description">
                    Elliot requested permission to view your contact details
                  </div>*/}
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}



//Sources
// https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764

import React, { Component } from 'react';
import api from '../../api';
import Axios from 'axios'
import {Redirect } from 'react-router'



export default class Dashoard extends Component {

  state={
    ExistingHouses: [],
    fireRedirect: false
  }

  componentDidMount(){
    // console.log(api.isLoggedIn())
    Axios.get('http://localhost:5000/api/dashboard', {withCredentials: true})
      .then(res=>{
        this.setState({ExistingHouses:res.data.houses})
          console.log('Dashoard State',this.state.ExistingHouses)
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
      Axios.post('http://localhost:5000/api/house', data)
        .then(res =>{
          console.log('RES', res)
          this.props.history.push(`house/build/${res.data.house._id}`)
          //this.setState({ fireRedirect: true })
        })
    }
  }


  handleInputChange = (e) =>{
    this.setState({HouseName: e.target.value})
  }


  fillCards = () =>{
    let houses = [...this.state.ExistingHouses]
    houses.map(house =>{
      console.log('xxxx');
      return(
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">
                {this.state.ExistingHouses}
              </div>
              <div className="meta">
                *created*
              </div>
              <div className="description">
                *Names of people in house*
              </div>
            </div>
          </div>
        </div>
      )
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
      return (
        <div>
        <Redirect to="/"/>
          {/*{setTimeout(<Redirect to="/"/>, 1000)}*/}
        </div>
      )
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
          {this.fillCards()}
        </div>
      </div>
    );
  }
}



//Sources
// https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764

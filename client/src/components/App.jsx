import React, { Component } from 'react';


import Nav from './Nav.js'

export default class App extends Component {

  state={
    isLoggedIn:null
  }

  toggleLogIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
    return (
      <div className="App">
          <Nav
            isLoggedIn={this.state.isLoggedIn}
            toggleLogIn={this.toggleLogIn}
          />
      </div>
    );
  }
}

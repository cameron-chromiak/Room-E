import React, { Component } from 'react';

import api from '../api';
import Nav from './Nav.js'

export default class App extends Component {

  state={
    isLoggedIn:null,
    user: {},
  }

  setUser = () => {
  if (api.isLoggedIn()) {
    this.setState({ user: api.getLocalStorageUser() })
  } else {
    this.setState({ user: {} })

  }
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

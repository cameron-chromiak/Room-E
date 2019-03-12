import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import api from '../api';

import Nav from './Nav.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }



  render() {
    return (
      <div className="App">
          <Nav/>
      </div>
    );
  }
}

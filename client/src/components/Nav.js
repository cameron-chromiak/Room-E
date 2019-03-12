import React from 'react'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import randomCountry from './pages/randomCountry';
import api from '../api';
import { Route, Link, NavLink, Switch } from 'react-router-dom';


class Nav extends React.Component{

  handleLogoutClick(e) {
    api.logout()
  }

render(){
  return(
    <div>
    <header className="App-header">
      <NavLink to="/" exact>Home</NavLink>
      {api.isLoggedIn() &&<NavLink to="/Dashboard">Dashboard</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
      {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
      <NavLink to="/secret">Secret</NavLink>
    </header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/secret" component={Secret} />
      <Route path="/random-country" component={randomCountry} />
      <Route render={() => <h2>404</h2>} />
    </Switch>
    </div>
  )  
}

}



export default Nav

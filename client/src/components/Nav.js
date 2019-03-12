import React from 'react'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import randomCountry from './pages/randomCountry';
import api from '../api';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './NavStyle.css'

class Nav extends React.Component{


  state={
    isLoggedIn: false
  }

  isUserLoggedIn = (user)=>{

    }

  handleLogoutClick(e) {
    api.logout()
  }

  onLogin = (user)=>{
    if(user){
      console.log('true');
    }

  }

render(){
  return(
    <div>
    <div className='ui secondary menu'>
      <NavLink to="/" className='item' exact>Home</NavLink>
      {api.isLoggedIn() &&<NavLink className='item' to="/dashboard">Dashboard</NavLink>}
      {!api.isLoggedIn() && <NavLink className='item' to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink className='item'to="/login">Login</NavLink>}
      <NavLink className='item' to="/secret">Secret</NavLink>
      <div className='right menu'>
      {api.isLoggedIn() && <Link className='item' to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
      </div>
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
        <Route
          path='/dashboard'
          render={(props) => <Dashboard {...props}isLoggedIn={this.state.isLoggedIn} />}
        />
      <Route path="/signup" component={Signup} />
      <Route path="/login" onLogin={'x'} component={Login} />
      <Route path="/secret" component={Secret} />
      <Route render={() => <h2>404</h2>} />
    </Switch>
    </div>
  )
}

}



// <Route path="/dashboard" component={Dashboard} />
// <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// />


export default Nav

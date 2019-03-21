import React from 'react'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import BuildTool from './pages/BuildTool'
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './NavStyle.css'

class Nav extends React.Component{




  handleLogoutClick(e) {
    api.logout()
    this.props.stuff.toggleLogIn()
  }

render(){
  // console.log(this)
  const props = this.props
  return(
    <div>
    <div className='ui secondary menu'>
      <NavLink to="/" className='item' exact>Home</NavLink>
      {api.isLoggedIn() &&<NavLink className='item' to="/dashboard">Dashboard</NavLink>}
      {!api.isLoggedIn() && <NavLink className='item' to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink className='item'to="/login">Login</NavLink>}
      <div className='right menu'>
      {api.isLoggedIn() && <Link className='item' to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
      </div>
    </div>
    <Switch >
      <Route path="/" exact component={Home} />
        <Route
          {...this.props}
          path='/dashboard'
          render={(props, hi) =>  <Dashboard {...props} stuff={this.props}/>}/>
        <Route
          path='/login'
          render={(props) => <Login {...props}  stuff={this.props}/>}
        />
      <Route path="/signup" component={Signup} />
      <Route path="/house/build/:id" component={BuildTool} />
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
// />      <Route path="/login" onLogin={this.onLogin} component={Login} />



export default Nav

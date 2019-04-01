import React, { Component } from 'react';
import api from '../../api';
import './styles/LoginStyle.css'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "cam",
      password: "123",
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  handleClick(e) {
    e.preventDefault()
    api.login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.stuff.toggleLogIn()
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  setLogin(){
    this.props.onLogin(true)
  }



  render() {
    console.log(this)
    return (
    <div className="ui card form">
    <div className="content">
      <div className="Login">
        <h2>Login</h2>
        <h6>Here, just use mine</h6>
        <form>
          Username: <input className='field' type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> <br />
          Password: <input className='field' type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
        <button className='ui button btn' onClick={(e) => this.handleClick(e)}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    </div>
  </div>

    );
  }
}

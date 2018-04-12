import React from 'react'

import Login from '../components/Login'
import Register from '../components/Register'

export default class Navbar extends React.Component {
  state = {
    toggled: ""
  }

  handleClick = (e) => {
    this.setState({
      toggled: e.target.innerText
    }, () =>  console.log(this.state.toggled))
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.handleClick}>Login</a>
        <a href="#" onClick={this.handleClick}>Register</a>

        {this.state.toggled === "Login" ? <Login /> : null}
        {this.state.toggled === "Register" ? <Register /> : null}
      </div>
    )
  }
}

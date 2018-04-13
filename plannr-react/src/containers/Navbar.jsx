import React from 'react'

import Login from '../components/Login'
import Register from '../components/Register'
import { Link } from 'react-router-dom'

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
    console.log(this.state.toggled);
    return (
      <div>
        <Link onClick={this.handleClick} to='#'>Login</Link>
        <Link onClick={this.handleClick} to='#'>Register</Link>

        {this.state.toggled === "Login" ? <Login /> : null}
        {this.state.toggled === "Register" ? <Register /> : null}
      </div>
    )
  }
}

import React from 'react'

import Login from '../components/Login'
import Register from '../components/Register'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends React.Component {
  state = {
    toggled: ""
  }

  handleClick = (e) => {
    this.setState({ toggled: e.target.innerText })
  }

  render() {
    return (
      <div>

        <Menu className="ui centered grid">
          <Menu.Item onClick={this.handleClick} to='#'>Login</Menu.Item>
          <Menu.Item onClick={this.handleClick} to='#'>Register</Menu.Item>
        </Menu>
        <div className="ui centered grid">
          {this.state.toggled === "Login" ? <Login setUser={this.props.setUser} /> : null}
          {this.state.toggled === "Register" ? <Register setUser={this.props.setUser} /> : null}
      </div>
    </div>
    )
  }
}

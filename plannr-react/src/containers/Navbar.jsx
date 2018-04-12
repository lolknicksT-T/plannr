import React from 'react'

import Login from '../components/Login'
import Register from '../components/Register'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Register />
      </div>
    )
  }
}

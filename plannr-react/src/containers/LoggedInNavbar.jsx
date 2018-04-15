import React from 'react'

import LogOut from '../components/LogOut'
import { Link } from 'react-router-dom'
import CreatePlanButton from '../components/CreatePlanButton'

export default class LoggedInNavbar extends React.Component {

  render() {
    return (
      <div>
        <LogOut logout={this.props.logout}/>
        <CreatePlanButton />
      </div>
    )
  }
}

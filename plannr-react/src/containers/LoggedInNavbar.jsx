import React from 'react'
import { Menu } from 'semantic-ui-react'


import LogOut from '../components/LogOut'
import { Link } from 'react-router-dom'
import CreatePlanButton from '../components/CreatePlanButton'

export default class LoggedInNavbar extends React.Component {

  render() {
    return (
      <div>
        <Menu className="ui top fluid">
          <CreatePlanButton setToggled={this.props.setToggled}/>
          <LogOut logout={this.props.logout}/>
        </Menu>
      </div>
    )
  }
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class CreatePlanButton extends React.Component {

  onNewPlan = () => {
    this.props.setToggled("new", 0)
  }

  render() {
    return(
      <Menu.Item position="left">
        <Link onClick={this.onNewPlan} to="#">Make a Plan</Link>
      </Menu.Item>
    )
  }
}

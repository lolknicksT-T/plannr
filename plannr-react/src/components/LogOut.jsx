import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const LogOut = (props) => {
  return (
    <Menu.Item position="right">
      <Link onClick={props.logout} to='#'>Logout</Link>
    </Menu.Item>
  )
}

export default LogOut

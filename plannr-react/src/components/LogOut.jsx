import React from 'react'
import { Link } from 'react-router-dom'


const LogOut = (props) => {



    return (
      <div>
        <Link onClick={props.logout} to='#'>Logout</Link>
      </div>
    )

}


export default LogOut

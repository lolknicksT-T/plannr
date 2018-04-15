import React from 'react'

import LogOut from '../components/LogOut'
import { Link } from 'react-router-dom'

export default class LoggedInNavbar extends React.Component {

  createNewPlan = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(localStorage.user),
        plan_id: this.props.plan.id
      })
    }
    
    fetch(`http://localhost:3000/api/v1/users/${parseInt(localStorage.user)}/plans`, options)
    .then(res => res.json())
    .then(json => this.setState({joined: true}, this.props.refetchMyPlans))
  }

  createNewUserPlan = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(localStorage.user),
        plan_id: this.props.plan.id
      })
    }
    
    fetch(`http://localhost:3000/api/v1/users/${parseInt(localStorage.user)}/plans`, options)
    .then(res => res.json())
    .then(json => this.setState({joined: true}, this.props.refetchMyPlans))
  }

  onNewPlan = () => {
    console.log(parseInt(localStorage.user))
    debugger
  }

  render() {
    return (
      <div>
        <LogOut logout={this.props.logout}/>
        <button >Dummy Make a Plan</button>
        <button onClick={this.onNewPlan}>Make a Plan</button>
      </div>
    )
  }
}

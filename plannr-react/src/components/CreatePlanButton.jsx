import React from 'react'

export default class CreatePlanButton extends React.Component {

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

  createNewConversation = () => {
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
    this.props.setToggled(-1)
  }

  render() {
    return(
      <div>
        <button onClick={this.onNewPlan}>Make a Plan</button>
      </div>
    )
  }
}

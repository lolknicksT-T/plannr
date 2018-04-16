import React from 'react'

export default class Plan extends React.Component {

  state = {
    joined: ""
  }

  onJoinPlan = (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(localStorage.user, 10),
        plan_id: this.props.plan.id
      })
    }
    fetch('http://localhost:3000/api/v1/user_plans', options)
    .then(res => res.json())
    .then(json => this.setToggled("detail", json.plan_id))
  }

  setToggled = (e) => {
    this.props.setToggled("detail", e.target.dataset.planid)
  }

  render() {
    return (
      <div data-planid={this.props.plan.id} onClick={this.setToggled}>
        {this.props.plan.title}
        {this.props.joined == true ? null : <button onClick={this.onJoinPlan}> Join </button>}
      </div>
    )
  }
}

import React from 'react'

export default class Plan extends React.Component {

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
    .then(json => {
      this.props.setToggled("detail", json.plan_id)
      this.props.pushJoinedPlans(json)
    })
  }

  setToggled = (e) => {
    this.props.setToggled("detail", e.target.parentNode.dataset.planid)
  }

  render() {
    return (
      <div data-planid={this.props.plan.id} >
        <span onClick={this.setToggled}>{this.props.plan.title }</span>
        {this.props.joined == true ? null : <button onClick={this.onJoinPlan}> Join </button>}
      </div>
    )
  }
}

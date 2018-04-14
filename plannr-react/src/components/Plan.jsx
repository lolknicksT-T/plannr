import React from 'react'

export default class Plan extends React.Component {

  state = {
    joined: ""
  }

  onJoinClick = (e) => {
    console.log(this.state)
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
    fetch('http://localhost:3000/api/v1/user_plans', options)
    .then(res => res.json())
    .then(json => this.setState({joined: true}, this.props.refetchMyPlans))
  }

  viewPlanDetails = (e) => {
    console.log(this.props)
    console.log(e.target.id)
    this.props.viewPlanDetails(e.target.dataset.planid, this.props.joined)
  }

  shouldJoinButtonRender = () => {
    console.log(this.props)
    console.log(this.state)
    if (this.props.joined == true) {
      return null
    } else if (this.props.joined == false) {
      return <button onClick={this.onJoinClick}> Join </button>
    } else {
      return <button onClick={this.onJoinClick}> Join </button>
    }
  }

  render() {
    return (
      <div data-planId={this.props.plan.id} onClick={this.viewPlanDetails}>
        {this.props.plan.title}
        {this.shouldJoinButtonRender()}
      </div>
    )
  }
}

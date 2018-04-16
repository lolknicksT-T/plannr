import React from 'react'

import JoinedUsers from './JoinedUsers'
import Conversation from './Conversation'
import JoinPlanButton from '../components/JoinPlanButton'
import EditPlanButton from '../components/EditPlanButton'
import LeavePlanButton from '../components/LeavePlanButton'

export default class PlanDetailsContainer extends React.Component {

  state = {
    plan: "",
    joined_users: [],
    joinedStatus: this.props.joinedStatus
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/plans/${parseInt(this.props.toggledPlan, 10)}`)
    .then(res => res.json())
    .then(json => this.setState({
      plan: json.plan,
      joined_users: json.joined_users
    }))
  }

  renderDeleteOrLeaveButon = () => {
    if (this.state.plan !== undefined ){
      if (parseInt(localStorage.user) === this.state.plan.admin_id) {
        return <EditPlanButton />
      } else if (this.state.joinedStatus) {
        return <LeavePlanButton findAndLeavePlan={this.props.findAndLeavePlan}/>
      } else {
        return null
      }
    }
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
        plan_id: this.state.plan.id
      })
    }
    fetch('http://localhost:3000/api/v1/user_plans', options)
    .then(res => res.json())
    .then(json => this.setState({joinedStatus: true},
    this.props.renderPlans))
  }

  render() {
    return(
      <div style={{"float": "right"}}>
        <h3>Plan Details: </h3>
        {this.renderDeleteOrLeaveButon()}
        <h3>{this.state.plan.title}</h3>
        <p>{this.state.plan.description}</p>
        <h4>{this.state.plan.location} @ {this.state.plan.date_time}</h4>
        <JoinedUsers users={this.state.joined_users}/>
        {this.state.joinedStatus ? <Conversation /> : <JoinPlanButton onJoinPlan={this.onJoinPlan}/>}
      </div>
    )
  }
}

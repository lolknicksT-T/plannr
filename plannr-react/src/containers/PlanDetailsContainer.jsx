import React from 'react'

import JoinedUsers from './JoinedUsers'
import Conversation from './Conversation'
import JoinPlanButton from '../components/JoinPlanButton'
import DeletePlanButton from '../components/DeletePlanButton'
import LeavePlanButton from '../components/LeavePlanButton'

export default class PlanDetailsContainer extends React.Component {
  renderDeleteOrLeaveButon = () => {
    if (parseInt(localStorage.user) === this.props.plan.admin_id) {
      return <DeletePlanButton />
    } else if (this.props.joinedStatus) {
      return <LeavePlanButton />
    } else {
      return null
    }
  }

  render() {
    console.log(this.props)
    return(
      <div style={{"float": "right"}}>
        <h3>Plan Details: </h3>
        {this.renderDeleteOrLeaveButon()}
        <h3>{this.props.plan.title}</h3>
        <p>{this.props.plan.description}</p>
        <h4>{this.props.plan.location} @ {this.props.plan.date_time}</h4>
        <JoinedUsers />
        {this.props.joinedStatus ? <Conversation /> : <JoinPlanButton />}
      </div>
    )
  }
}

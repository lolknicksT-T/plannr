import React from 'react'

import JoinedUsers from './JoinedUsers'
import Conversation from './Conversation'
import JoinPlanButton from '../components/JoinPlanButton'

export default class PlanDetailsContainer extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div style={{"float": "right"}}>
        <h3>Plan Details: </h3>
        <p>Lock to right side</p>
        <h3>{this.props.plan.title}</h3>
        <p>{this.props.plan.description}</p>
        <h4>{this.props.plan.location} @ {this.props.plan.date_time}</h4>
        <JoinedUsers />
        {this.props.joinedStatus ? <Conversation /> : <JoinPlanButton />}
      </div>
    )
  }
}

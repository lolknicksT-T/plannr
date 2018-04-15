import React from 'react'

import JoinedUsers from './JoinedUsers'
import Conversation from './Conversation'
import JoinPlanButton from '../components/JoinPlanButton'

export default class PlanDetailsContainer extends React.Component {
  render() {
    return(
      <div style={{"float": "right"}}>
        <h3>Plan Details: </h3>
        <p>Lock to right side</p>
        <h3>{this.props.plan.title}</h3>
        <h4>Somewhere @ Some:Time</h4>
        <JoinedUsers />
        {this.props.joinedStatus ? <Conversation /> : <JoinPlanButton />}
      </div>
    )
  }
}

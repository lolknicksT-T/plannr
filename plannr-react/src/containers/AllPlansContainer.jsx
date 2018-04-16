import React from 'react'

import Plan from '../components/Plan'

export default class AllPlansContainer extends React.Component {

  renderPlans = () => {
    return this.props.allPlans.map( plan => {
      let notJoined = this.props.notJoinedPlans.map( notJoinedPlan => notJoinedPlan.id )
      return notJoined.includes(plan.id) ? this.notJoinedPlan(plan) : this.joinedPlan(plan)
    })
  }

  notJoinedPlan = (plan) => {
    return (
      <Plan key={plan.id} plan={plan} joined={false} setToggled={this.props.setToggled} />
    )
  }

  joinedPlan = (plan) => {
    return (
      <Plan key={plan.id} plan={plan} joined={true} setToggled={this.props.setToggled} />
    )
  }

  render() {
    return (
      <div>
        {Array.isArray(this.props.allPlans) && Array.isArray(this.props.notJoinedPlans) ? this.renderPlans() : null}
      </div>
    )
  }
}

import React from 'react'

import Plan from '../components/Plan'

import {Card} from 'semantic-ui-react'

export default class AllPlansContainer extends React.Component {

  renderPlans = () => {
    return this.props.allPlans.map( plan => {
      console.log(this.props.notJoinedPlans)
      let notJoined = this.props.notJoinedPlans.map( notJoinedPlan => notJoinedPlan.id )
      return notJoined.includes(plan.id) ? this.notJoinedPlan(plan) : this.joinedPlan(plan)
    })
  }

  notJoinedPlan = (plan) => {
    return (
      <Plan key={plan.id} plan={plan} joined={false} setToggled={this.props.setToggled} pushJoinedPlans={this.props.pushJoinedPlans}/>
    )
  }

  joinedPlan = (plan) => {
    return (
      <Plan key={plan.id} plan={plan} joined={true} setToggled={this.props.setToggled} />
    )
  }

  render() {
    return (
      <Card.Group centered itemsPerRow={4}>
        {Array.isArray(this.props.allPlans) && Array.isArray(this.props.notJoinedPlans) ? this.renderPlans() : null}
      </Card.Group>
    )
  }
}

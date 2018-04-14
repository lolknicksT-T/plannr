import React from 'react'

import Plan from '../components/Plan'

export default class AllPlans extends React.Component {

  state = {
    notJoinedPlans: []
  }

  componentWillReceiveProps = (nextProps) => {

    let notJoined = []
    if (nextProps.myPlans.length === 0) {
      this.setState({notJoinedPlans: nextProps.allPlans})
    } else if (nextProps.allPlans.length > 0 && nextProps.myPlans.length > 0) {
      nextProps.allPlans.map( plan => plan.id).forEach( planId => {
        if(!nextProps.myPlans.map( plan => plan.id ).includes(planId)) {
          notJoined.push(nextProps.allPlans[planId - 1])
        }
      })
      this.setState({notJoinedPlans: notJoined})
    }
  }

  notJoinedPlan = (plan) => {
    return (
      <Plan key={plan.id} plan={plan} notJoined={true} refetchMyPlans={this.props.refetchMyPlans} viewPlanDetails={this.props.viewPlanDetails} />
    )
  }

  joinedPlan = (plan) => {
    return (
      <Plan key={plan.id} plan={plan} notJoined={false} viewPlanDetails={this.props.viewPlanDetails} />
    )
  }

  renderPlans = () => {
    return this.props.allPlans.map( plan =>
      this.state.notJoinedPlans.includes(plan) ? this.notJoinedPlan(plan) : this.joinedPlan(plan)
    )
  }

  render() {
    return (
      <div>
        {this.renderPlans()}
      </div>
    )
  }
}

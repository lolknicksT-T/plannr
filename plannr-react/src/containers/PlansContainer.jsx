import React from 'react'

import MyPlans from './MyPlans'
import AllPlans from './AllPlans'
import PlanDetailsContainer from './PlanDetailsContainer'

export default class PlansContainer extends React.Component {
  state = {
    allPlans: [],
    myPlans: [],
    toggledPlan: 0,
    joinedStatus: ""
  }

  componentDidMount() {
    this.fetchMyPlans()
    this.fetchAllPlans()
  }

  fetchAllPlans = () => {
    fetch('http://localhost:3000/api/v1/plans')
    .then(res => res.json())
    .then(json => this.setState({ allPlans: json }))
  }

  fetchMyPlans = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.props.user}/my_plans`)
    .then(res => res.json())
    .then(json => this.setState({ myPlans: json }))
  }

  viewPlanDetails = (planId, planJoinedStatus) => {
    this.state.toggledPlan !== planId ? this.setState({ toggledPlan: planId, joinedStatus: planJoinedStatus }) : this.setState({ toggledPlan: 0, joinedStatus: "" })
  }

  findToggledPlan = () => {
    return this.state.allPlans.find( plan => plan.id === parseInt(this.state.toggledPlan) )
  }

  render() {
    return (
      <div>
        <div style={ this.state.toggledPlan > 0 ? {"float":"left"} : null}>
          My Plans:
          {<MyPlans myPlans={this.state.myPlans} viewPlanDetails={this.viewPlanDetails} />}
          <br/>
          All Plans:
          {<AllPlans myPlans={this.state.myPlans} allPlans={this.state.allPlans} refetchMyPlans={this.fetchMyPlans} viewPlanDetails={this.viewPlanDetails} />}
          <br />
        </div>
        {this.state.toggledPlan > 0 ? <PlanDetailsContainer plan={this.findToggledPlan()} joinedStatus={this.state.joinedStatus} /> : null}
      </div>
    )
  }
}

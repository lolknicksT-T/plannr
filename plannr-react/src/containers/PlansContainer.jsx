import React from 'react'

import MyPlans from './MyPlans'
import AllPlans from './AllPlans'
import PlanDetailsContainer from './PlanDetailsContainer'
import PlanFormContainer from './PlanFormContainer'

export default class PlansContainer extends React.Component {
  state = {
    allPlans: [],
    myPlans: [],
    toggledPlan: this.props.toggled,
    joinedStatus: ""
  }

  componentWillReceiveProps(nextProps) {
    this.props.toggled !== nextProps.toggled ? this.setState({ toggledPlan: nextProps.toggled }, () => console.log(this.state.toggledPlan)) : null
  }

  shouldJoinButtonRender = () => {
    if (this.props.joined == true) {
      return null
    } else if (this.props.joined == false) {
      return <button onClick={this.onJoinPlan}> Join </button>
    } else {
      return <button onClick={this.onJoinPlan}> Join </button>
    }
  }

  renderSideBarContent = () => {
    if (this.state.toggledPlan === 0) {
      return null;
    }
    else if (this.state.toggledPlan < 0) {
      return this.renderPlanForm();
    } else if(this.state.toggledPlan > 0) {
      return this.renderPlanDetails()
    }
  }

  renderPlanForm = () => {
    return <PlanFormContainer refetchMyPlans={this.fetchMyPlans} refetchAllPlans={this.fetchAllPlans}/>
  }

  renderPlanDetails = () => {
    return <PlanDetailsContainer plan={this.findToggledPlan()} joinedStatus={this.state.joinedStatus} findAndLeavePlan={this.findAndLeaveUserPlan}/>
  }

  componentDidMount() {
    this.renderPlans()
  }

  renderPlans = () => {
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
    if (this.state.toggledPlan !== planId){
      this.props.setToggled(planId)
      this.setState({ joinedStatus: planJoinedStatus })
    } else {
      this.props.setToggled(0)
      this.setState({ joinedStatus: "" })
    }
  }

  findToggledPlan = () => {
    return this.state.allPlans.find( plan => plan.id === parseInt(this.state.toggledPlan, 10) )
  }

  findAndLeaveUserPlan = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(localStorage.user, 10),
        plan_id: this.state.toggledPlan
      })
    }

    fetch(`http://localhost:3000/api/v1/user_plans/find`, options)
    .then(res => res.json())
    .then(json => this.deleteUserPlan(json.id))
  }

  deleteUserPlan = (json) => {
    const options = {
      method: "DELETE"
    }
    console.log(this.state)
    debugger
    fetch(`http://localhost:3000/api/v1/user_plans/${json}`, options)
    .then(res => this.setState({toggledPlan: 0, joinedStatus: ""}))
    .then(res => this.renderPlans() )

  }

  render() {
    return (
      <div>
        <div style={ this.state.toggledPlan !== 0 ? {"float":"left"} : null}>
          My Plans:
          {<MyPlans myPlans={this.state.myPlans} viewPlanDetails={this.viewPlanDetails} />}
          <br/>
          All Plans:
          {<AllPlans myPlans={this.state.myPlans} allPlans={this.state.allPlans} refetchMyPlans={this.fetchMyPlans} viewPlanDetails={this.viewPlanDetails} />}
          <br />
        </div>
        {this.renderSideBarContent()}
      </div>
    )
  }
}

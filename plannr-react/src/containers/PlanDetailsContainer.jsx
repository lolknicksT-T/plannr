import React from 'react'

import JoinedUser from '../components/JoinedUser'
import Conversation from './Conversation'

export default class PlanDetailsContainer extends React.Component {

  state = {
    plan: "",
    joined_users: "",
    joinedStatus: ""
  }

  componentDidMount() {
    this.getJoinedStatus(this.props)
    this.getPlanAndJoinedUsers(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.getJoinedStatus(nextProps)
    this.getPlanAndJoinedUsers(nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.props);
  //   // console.log(nextProps);
  //   // console.log(this.state);
  //   // console.log(nextState);
  //   if (nextState.plan !== this.state.plan || nextProps.toggledView !== this.props.toggledView || nextProps.toggledPlan !== this.props.toggledPlan) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  getPlanAndJoinedUsers = (props) => {
    fetch(`http://localhost:3000/api/v1/plans/${parseInt(props.toggledPlan, 10)}`)
    .then(res => res.json())
    .then(json => this.setState({
      plan: json.plan,
      joined_users: json.joined_users
    }))
  }

  getJoinedStatus = (props) => {
    let myPlans = props.myPlans.map( plan => plan.id )
    myPlans.includes(parseInt(props.toggledPlan)) ? this.setState({ joinedStatus: true }) : this.setState({ joinedStatus: false })
  }

  renderDeleteOrLeaveButon = () => {
    if (this.state.plan !== undefined ){
      if (parseInt(localStorage.user) === this.state.plan.admin_id) {
        return <button>Edit Plan</button>
      } else if (this.state.joinedStatus) {
        return <button onClick={this.props.findAndLeavePlan}>Leave Plan</button>
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
    .then(json => {
      this.props.setToggled("detail", json.plan_id)
      this.props.pushJoinedPlans(json)
    })
  }

  joinedUsers = () => {
    if (Array.isArray(this.state.joined_users)) {
      return this.state.joined_users.map( user => <JoinedUser user={user}/>)
    }
  }

  render() {
    return(
      <div style={{"float": "right"}}>
        <h3>Plan Details: </h3>
        {this.renderDeleteOrLeaveButon()}
        <h3>{this.state.plan.title}</h3>
        <p>{this.state.plan.description}</p>
        <h4>{this.state.plan.location} @ {this.state.plan.date_time}</h4>
        <ul>Joined Users: {this.joinedUsers()}</ul>
        {this.state.joinedStatus ? <Conversation planId={this.state.plan.id} /> : <button onClick={this.onJoinPlan}>Join to view Conversation</button>}
      </div>
    )
  }
}

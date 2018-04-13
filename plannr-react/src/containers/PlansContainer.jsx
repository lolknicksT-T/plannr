import React from 'react'

import MyPlans from './MyPlans'
import AllPlans from './AllPlans'

export default class PlansContainer extends React.Component {
  state = {
    allPlans: [],
    myPlans: []
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

  render() {
    return (
      <div>
        My Plans:
        {<MyPlans myPlans={this.state.myPlans} />}
        <br/>
        All Plans:
        {<AllPlans myPlans={this.state.myPlans} allPlans={this.state.allPlans} refetchMyPlans={this.fetchMyPlans}/>}
      </div>
    )
  }
}

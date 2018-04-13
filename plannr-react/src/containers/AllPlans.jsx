import React from 'react'

import Plan from '../components/Plan'

export default class AllPlans extends React.Component {

  state = {
    notJoinedPlans: []
  }

  componentWillReceiveProps = (nextProps) => {

    let notJoined = []
    if (nextProps.allPlans.length > 0 && nextProps.myPlans.length > 0) {
       nextProps.allPlans.map( plan => plan.id).forEach( planId => {
         if(!nextProps.myPlans.map( plan => plan.id ).includes(planId)) {
           notJoined.push(nextProps.allPlans[planId - 1])
         }
      })
    }
    this.setState({notJoinedPlans: notJoined})
  }

  renderPlans = () => {
    return this.props.allPlans.map( plan => this.state.notJoinedPlans.includes(plan) ? <Plan key={plan.id} plan={plan} notJoined={true} /> : <Plan key={plan.id} plan={plan} notJoined={false} /> )
  }

  render() {
    return (
      <div>
        {this.renderPlans()}
      </div>
    )
  }
}

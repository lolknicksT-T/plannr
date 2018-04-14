import React from 'react'

import Plan from '../components/Plan'

export default class MyPlans extends React.Component {

  renderMyPlans = () => {
    return this.props.myPlans.map( plan => <Plan plan={plan} key={plan.id} notJoined={false} viewPlanDetails={this.props.viewPlanDetails} />)
  }

  render() {
    return (
      <div>
        {this.renderMyPlans()}
      </div>
    )
  }
}

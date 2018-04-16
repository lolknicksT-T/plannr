import React from 'react'

import Plan from '../components/Plan'

class MyPlansContainer extends React.Component {

  renderMyPlans = () => {
    return this.props.myPlans.map( plan => <Plan key={plan.id} plan={plan} joined={true} setToggled={this.props.setToggled} /> )
  }

  render() {
    return (
      <div>
        {Array.isArray(this.props.myPlans) ? this.renderMyPlans() : null}
      </div>
    )
  }
}

export default MyPlansContainer

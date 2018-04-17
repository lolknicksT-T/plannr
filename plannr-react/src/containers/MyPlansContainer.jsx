import React from 'react'

import Plan from '../components/Plan'

import {Card} from 'semantic-ui-react'

class MyPlansContainer extends React.Component {

  renderMyPlans = () => {
    return this.props.myPlans.map( plan => <Plan key={plan.id} plan={plan} joined={true} setToggled={this.props.setToggled} /> )
  }

  render() {
    return (
      <Card.Group centered itemsPerRow={4}>
        {Array.isArray(this.props.myPlans) ? this.renderMyPlans() : null}
      </Card.Group>
    )
  }
}

export default MyPlansContainer

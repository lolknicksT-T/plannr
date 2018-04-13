import React from 'react'

import Plan from '../components/Plan'

export default class AllPlans extends React.Component {

  renderPlans = () => {
    return this.props.allPlans.map( plan => <Plan plan={plan}/>)
  }

  render() {
    return (
      <div>
        {this.renderPlans()}
      </div>
    )
  }
}

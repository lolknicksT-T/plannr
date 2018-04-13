import React from 'react'

import Plan from '../components/Plan'

export default class MyPlans extends React.Component {

  renderMyPlans = () => {
    console.log(this.props)
    return this.props.myPlans.map( plan => <Plan plan={plan}/>)
  }

  render() {
    return (
      <div>
        {this.renderMyPlans()}
      </div>
    )
  }
}

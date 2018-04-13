import React from 'react'

import Plan from '../components/Plan'

export default class MyPlans extends React.Component {
  render() {
    return (
      <div>
        MyPlans
        <a href="#" onClick={this.props.logout} >Log Out</a>
      </div>
    )
  }
}

import React from 'react'

export default class LeavePlanButton extends React.Component {
  render() {
    return(
      <div>
        <button onClick={this.props.findAndLeavePlan}>Leave Plan</button>
      </div>
    )
  }
}

import React from 'react'

export default class JoinPlanButton extends React.Component {

  render() {
    return(
      <div>
        <button onClick={this.props.onJoinPlan}>Join to view Conversation</button>
      </div>
    )
  }
}

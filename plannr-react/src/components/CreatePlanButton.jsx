import React from 'react'

export default class CreatePlanButton extends React.Component {

  onNewPlan = () => {
    this.props.setToggled("new", 0)
  }

  render() {
    return(
      <div>
        <button onClick={this.onNewPlan}>Make a Plan</button>
      </div>
    )
  }
}

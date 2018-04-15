import React from 'react'

export default class CreatePlanButton extends React.Component {



  onNewPlan = () => {
    this.props.setToggled(-1)
  }

  render() {
    return(
      <div>
        <button onClick={this.onNewPlan}>Make a Plan</button>
      </div>
    )
  }
}

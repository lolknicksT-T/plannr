import React from 'react'

export default class PlanFormContainer extends React.Component {

  state = {
    name: '',
    value: ''
  }

  render(){
    return(
      <div className='planform'>


        <label>Name</label>
        <input type='text' placeholder='name'></input>
          <label>Value</label>
          <input type='text' placeholder='name'></input>



      </div>
    )
  }
}



// <div style={{"float": "right"}}>
//   <h3>Plan Details: </h3>
//   <p>Lock to right side</p>
//   <h3>{this.props.plan.title}</h3>
//   <h4>Somewhere @ Some:Time</h4>
//   <JoinedUsers />
//   {this.props.joinedStatus ? <Conversation /> : <JoinPlanButton />}
// </div>

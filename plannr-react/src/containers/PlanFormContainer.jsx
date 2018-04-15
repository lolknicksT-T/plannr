import React from 'react'

export default class PlanFormContainer extends React.Component {

  state = {
    planName: '',
    description: ''
  }

  updateFormData = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render(){
    return(
      <div className='planform'>

        <form>
        <label>Name</label>
        <input type='text' name='planName' value ={this.state.planName}
           onChange={this.updateFormData} placeholder='name'></input>

          <label>Value</label>
          <input type='text' name='description' placeholder='name'
            value={this.state.description} onChange={this.updateFormData}></input>
          
          </form>



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

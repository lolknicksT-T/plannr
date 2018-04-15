import React from 'react'

export default class PlanFormContainer extends React.Component {

  state = {
    planName: '',
    description: '',
    errors: []
  }


  createNewPlan = () => {
    let data = {
      plan: {
        title: this.state.planName,
        description: this.state.description
      }
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch(`http://localhost:3000/api/v1/plans`, options)
    .then(res => res.json())
    .then(json => {
      if (json.errors){
        this.setState({errors: json.errors})
      } else {
        this.createNewUserPlan(json.id)
        this.createNewConversation(json)
      }
    })
  }


  createNewUserPlan = (json) => {
    let data = {
      userplan : {
        user_id: parseInt(localStorage.user),
        plan_id: json
      }
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }


    fetch(`http://localhost:3000/api/v1/user_plans`, options)
    .then(res => res.json())
    .then(json => {
      if (json.errors){
        this.setState({errors: json.errors})
      }
    })
  }

  createNewConversation = (json) => {
    let data = {
      title: json.title,
      plan_id: json.id
    }
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch(`http://localhost:3000/api/v1/conversations`, options)
    .then(res => res.json())
    .then(json => {
      if (json.errors){
        this.setState({errors: json.errors})
      }
    })
  }


  updateFormData = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.props.function(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.createNewPlan();
  }

  render(){
    console.log(this.state);
    return(
      <div className='planform'>
        <form onSubmit={this.handleSubmit}>
          <label>Plan Name</label>
          <input type='text' name='planName' value ={this.state.planName}
            onChange={this.updateFormData} placeholder='Plan Name'></input>
          <label>Description</label>
          <input type='text' name='description' placeholder='Description'
            value={this.state.description} onChange={this.updateFormData}></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

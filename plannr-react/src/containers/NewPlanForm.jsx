import React from 'react'
// import DateTimePicker from 'react-datetime-picker'
// import Calendar from 'rc-calendar';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import {Form, Button} from 'semantic-ui-react'

export default class PlanFormContainer extends React.Component {

  state = {
    planName: "",
    description: "",
    location: "",
    date: moment(),
    errors: []
  }


  createNewPlan = () => {
    let data = {
      plan: {
        title: this.state.planName,
        description: this.state.description,
        location: this.state.location,
        date_time: this.state.date,
        admin_id: parseInt(localStorage.user)
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
        this.props.setToggled("detail", json.id)
        this.props.addNewPlan(json)
        this.createNewConversation(json)
      }
    })
  }

  createNewUserPlan = (json) => {
    let data = {
      user_id: parseInt(localStorage.user),
      plan_id: json
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }


    fetch('http://localhost:3000/api/v1/user_plans', options)
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
  }


  updateFormData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.props.function(this.state)
  }

  updateTime = date => {
    let options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric',
    };
    let dateFormatted = Intl.DateTimeFormat('en-US', options).format(date)
    this.setState({ date: dateFormatted })}

  handleSubmit = (e) => {
    e.preventDefault();
    this.createNewPlan();
  }

  render(){
    return(
      <div className='planform'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input type='text' label="Plan Name" name='planName' value ={this.state.planName} onChange={this.updateFormData} ></Form.Input>
          </Form.Group>
          <Form.Group>
            <Form.Input type='text' label="Description" name='description' value={this.state.description} onChange={this.updateFormData}></Form.Input>
          </Form.Group>
          <Form.Group>
            <Form.Input type='text' label="Location" name='location' value={this.state.location} onChange={this.updateFormData}></Form.Input>
          </Form.Group>
          <Form.Group>
            <DatePicker
              selected={this.state.date}
              onChange={this.updateTime}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              timeCaption="time"
            />
            {/* <DateTimePicker onChange={this.updateTime} value={this.state.date} /> */}
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

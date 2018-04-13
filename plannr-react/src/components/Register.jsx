import React from 'react'

export default class Register extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      body: JSON.stringify(this.state),
      header: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
  }

  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <label /> Username:
          <input onChange= {this.handleChange} type="text" name="username"/>
          <label /> Password:
          <input onChange= {this.handleChange} type="password" name="password"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

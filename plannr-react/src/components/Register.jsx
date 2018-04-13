import React from 'react'

export default class Register extends React.Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  }


  handleChange = (e) => {
    this.setState({
      user: {
       ...this.state.user, [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state)


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

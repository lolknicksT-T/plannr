import React from 'react'

export default class Login extends React.Component {
  state = {
    session: {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      session: {
       ...this.state.session, [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/api/v1/sessions', options)
    .then(res => res.json())
    .then(json => this.setUser(json))
  }

  setUser = (json) => {
    this.props.setUser(json.id)
  }

  render() {
    return (
      <div className="login">
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

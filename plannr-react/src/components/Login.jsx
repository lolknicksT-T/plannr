import React from 'react'

export default class Login extends React.Component {
  state = {
    session: {
      username: "",
      password: "",
      errors: []
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
    .then(json => {
      if (json.errors) {
        this.setState({ errors: json.errors })
      } else {
        this.setState({ errors: [] })
        this.setUser(json)
        // this.props.history.push("/")
      }
    })
  }

  setUser = (json) => {
    this.props.setUser(json)
  }

  render() {
    return (
      <div className="login">
        <h3>Login</h3>
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

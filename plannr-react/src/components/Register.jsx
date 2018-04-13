import React from 'react'

export default class Register extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
      errors: []
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
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/api/v1/users', options)
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

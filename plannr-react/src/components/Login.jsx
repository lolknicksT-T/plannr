import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form>
          <label /> Username:
          <input type="text"/>
          <label /> Password:
          <input type="password"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

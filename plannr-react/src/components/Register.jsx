import React from 'react'

export default class Register extends React.Component {
  render() {
    return (
      <div className="register">
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

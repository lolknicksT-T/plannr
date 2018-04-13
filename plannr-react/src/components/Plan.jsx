import React from 'react'

export default class Plan extends React.Component {
  render() {
    return (
      <div>
        {this.props.plan.title}
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

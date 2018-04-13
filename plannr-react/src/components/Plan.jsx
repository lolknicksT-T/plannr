import React from 'react'

export default class Plan extends React.Component {


  render() {
    return (
      <div>


        {this.props.plan.title}
        { this.props.notJoined ? <button onClick={this.handleClick}> Join </button> : null}

      </div>
    )
  }
}

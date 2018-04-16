import React from 'react'

class PreviousMessages extends React.Component {
  state = {
    messages: []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.conversation_id !== this.props.conversation_id) {  
      fetch(`http://localhost:3000/api/v1/conversations/${nextProps.conversation_id}`)
      .then(res => res.json())
      .then(json => this.setState({ messages: json.messages}))
    }
  }

  render(){
    let messages = this.state.messages.map( message => <li key={message.id}>{message.user.username}: {message.content}</li> )

    return (
      <div>
        {messages}
      </div>
    )
  }
}

export default PreviousMessages

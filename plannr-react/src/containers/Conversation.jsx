import React from 'react'
import { ActionCable } from 'react-actioncable-provider';
import Cable from '../components/Cable';
import MessagesArea from '../components/MessagesArea';
// import NewMessageForm from '../components/NewMessagesForm';

// import User from '../components/User'
// import Message from '../components/Message'

export default class Conversation extends React.Component {
  state = {
    conversation: {
      id: "",
      title: "",
      messages: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    debugger
    fetch(`http://localhost:3000/api/v1/conversations/${nextProps.planId}`)
    .then(res => res.json())
    .then(conversation => this.setState({conversation}, () => console.log(this.state)))
  }

  handleReceivedMessage = response => {
    const { message } = response;
    const conversation = this.state.conversation;
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversation });
  };

  render() {
    console.log(this.state)
    debugger
    return(
      <div className="conversation">
        <ActionCable channel={{ channel: 'ConversationsChannel' }} />
        <Cable conversation={this.state.conversation} handleReceivedMessage={this.handleReceivedMessage} />
        <MessagesArea conversation={this.state.conversation} />
      </div>
    )
  }
}

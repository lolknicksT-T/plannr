import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {
  return (
    <div className="messagesArea">
      <h5>Plan Title: {title}</h5>
      <ul>{newOrderedMessages(messages)}</ul>
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const newOrderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.user.username}: {message.content}</li>;
  });
};

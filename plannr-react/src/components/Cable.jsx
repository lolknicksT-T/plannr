import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ conversation, handleReceivedMessage }) => {
  return (
    <Fragment>
      <ActionCable
        key={conversation.id}
        channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
        onReceived={handleReceivedMessage}
      />
    </Fragment>
  );
};

export default Cable;

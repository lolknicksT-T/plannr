import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewMessageForm extends React.Component {
  state = {
      content: '',
      conversation_id: this.props.conversation_id,
      user_id: parseInt(localStorage.user, 10)
  };

  componentWillReceiveProps = nextProps => {
    console.log(nextProps)
    debugger
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ content: e.target.value }, console.log(this.state));
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/api/v1/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ content: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;

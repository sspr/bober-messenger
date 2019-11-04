import React from 'react';
import Window from './Window';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  handleSubmit = (name, message, key) => {
    if (message) {
      const messages = [...this.state.messages];

      messages.push({ user: name, message: message, key: key });
      this.setState({ messages });
    }
  }

  render() {
    return (
      <div>
        <div className="user-1-window">
          <Window messages={this.state.messages} onSubmit={this.handleSubmit} user='userOne' />
        </div>
        <div className="user-2-window">
          <Window messages={this.state.messages} onSubmit={this.handleSubmit} user='userTwo' />
        </div>
      </div>
    );
  }
}

export default Messenger;
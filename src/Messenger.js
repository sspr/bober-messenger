import React from 'react';

import { Wrapper } from './Wrapper';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  handleSubmit = (name, message) => {
    if (message) {
      const messages = [...this.state.messages];

      messages.push({ user: name, message });
      this.setState({ messages });
    }
  };

  render() {
    return (
      <div>
        <Wrapper messages={this.state.messages} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Messenger;

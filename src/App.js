import React from 'react';
import { Wrapper } from './Wrapper';
import { MessagesContext } from './MessagesContext';

class App extends React.Component {
  handleSubmit = (name, message) => {
    if (message) {
      const messages = [...this.state.messages];

      messages.push({ user: name, message });
      this.setState({ messages });
    }
  };

  state = {
    messages: [],
    handleSubmit: this.handleSubmit,
  };

  render() {
    return (
      <div className="messenger">
        <MessagesContext.Provider value={this.state}>
          <Wrapper onSubmit={this.handleSubmit} />
        </MessagesContext.Provider>
      </div>
    );
  }
}

export default App;

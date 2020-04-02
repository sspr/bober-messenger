import React from 'react';

export const MessagesContext = React.createContext({
  messages: [],
  handleSubmit: () => {},
});

export class MessagesProvider extends React.Component {
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
          {this.props.children}
        </MessagesContext.Provider>
      </div>
    );
  }
}
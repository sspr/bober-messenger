import React from 'react';
import { MessagesContext } from './MessagesContext';

class Window extends React.Component {
  state = {
    text: '',
  };

  handlePress = () => {
    this.context.handleSubmit(this.props.user, this.state.text);
    this.setState({ text: '' });
  };

  renderMessages = () =>
    this.context.messages.map((message, index) => (
      <p key={index} className={message.user}>
        {message.message}
      </p>
    ));

  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleEnterUp = event => {
    if (event.keyCode === 13) this.handlePress(event);
  };

  render() {
    return (
      <div className="messages">
        <div className="messages__window">{this.renderMessages()}</div>
        <div className="messages__form">
          <input
            className="messages__form--text"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyUp={this.handleEnterUp}
          />
          <input className="messages__form--submit" type="submit" onClick={this.handlePress} />
        </div>
      </div>
    );
  }
}
Window.contextType = MessagesContext;

export default Window;

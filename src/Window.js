import React, { useState, useContext } from 'react';
import { MessagesContext } from './MessagesContext';

function Window(props) {
  const [text, setText] = useState('');
  const messages = useContext(MessagesContext);

  const handleSubmit = () => {
    if (text) {
      messages.handleSubmit({ user: props.user, message: text });
      setText('');
    }
  };

  const renderMessages = () =>
    messages.messages.map((message, index) => (
      <p key={index} className={message.user}>
        {message.message}
      </p>
    ));

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleEnterUp = (event) => {
    if (event.keyCode === 13) handleSubmit();
  };

  return (
    <div className="messages">
      <div className="messages__window">{renderMessages()}</div>
      <div className="messages__form">
        <input
          className="messages__form--text"
          type="text"
          value={text}
          onChange={handleChange}
          onKeyUp={handleEnterUp}
        />
        <input className="messages__form--submit" type="submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Window;

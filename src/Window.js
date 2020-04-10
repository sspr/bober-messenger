import React, { useState } from 'react';
import { useMessages } from './messagesContext/useMessages';
import classNames from 'classnames';

function Window(props) {
  const [text, setText] = useState('');
  const { messages, addMessage } = useMessages();

  const handleSubmit = () => {
    if (text) {
      addMessage({ user: props.user, message: text });
      setText('');
    }
  };

  const renderMessages = () =>
    messages.map((message, index) => (
      <p
        key={index}
        className={classNames({
          'window__message--left': props.user === message.user,
          'window__message--right': !(props.user === message.user),
        })}
      >
        {message.message}
      </p>
    ));

  return (
    <div className="window">
      <div className="window__messages">{renderMessages()}</div>
      <div className="window__form">
        <input
          className="window__form-text"
          type="text"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          onKeyUp={(event) => (event.keyCode === 13 ? handleSubmit() : null)}
        />
        <input className="window__form-submit" type="submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Window;

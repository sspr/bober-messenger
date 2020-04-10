import React, { useReducer } from 'react';
import { MessagesContext } from './MessagesContext';

function reducer(messages, { user, message }) {
  return [...messages, { user, message }];
}

export function MessagesContextProvider(props) {
  const [messages, addMessage] = useReducer(reducer, []);

  return (
    <div className="messenger">
      <MessagesContext.Provider value={{ messages, addMessage }}>{props.children}</MessagesContext.Provider>
    </div>
  );
}

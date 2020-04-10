import React, { useReducer } from 'react';

export const MessagesContext = React.createContext({
  messages: [],
  addMessage: () => { },
});

function reducer(messages, { user, message }) {
  return [...messages, { user, message }];
}

export function MessagesProvider(props) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="messenger">
      <MessagesContext.Provider value={{ messages: state, addMessage: dispatch }}>
        {props.children}
      </MessagesContext.Provider>
    </div>
  );
}

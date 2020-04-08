import React, { useReducer } from 'react';

export const MessagesContext = React.createContext({
  messages: [],
  handleSubmit: () => {},
});

function reducer(state, action) {
  const messages = [...state];

  messages.push({ user: action.user, message: action.message });
  return messages;
}

export function MessagesProvider(props) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="messenger">
      <MessagesContext.Provider value={{ messages: state, handleSubmit: dispatch }}>
        {props.children}
      </MessagesContext.Provider>
    </div>
  );
}

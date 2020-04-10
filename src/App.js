import React from 'react';
import { Wrapper } from './Wrapper';
import { MessagesContextProvider } from './messagesContext/MessagesContextProvider';

function App() {
  return (
    <div className="messenger">
      <MessagesContextProvider>
        <Wrapper />
      </MessagesContextProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { Wrapper } from './Wrapper';
import { MessagesProvider } from './MessagesContext';

function App() {
  return (
    <div className="messenger">
      <MessagesProvider>
        <Wrapper />
      </MessagesProvider>
    </div>
  );
}

export default App;

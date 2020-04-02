import React from 'react';
import { Wrapper } from './Wrapper';
import { MessagesProvider } from './MessagesContext';

class App extends React.Component {

  render() {
    return (
      <div className="messenger">
        <MessagesProvider>
          <Wrapper />
        </MessagesProvider>
      </div>
    );
  }
}

export default App;

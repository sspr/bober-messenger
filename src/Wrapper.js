import React from 'react';

import Window from './Window';

export function Wrapper({ messages, onSubmit }) {
  return (
    <>
      <div className="user-1-window">
        <Window messages={messages} onSubmit={onSubmit} user="userOne" />
      </div>
      <div className="user-2-window">
        <Window messages={messages} onSubmit={onSubmit} user="userTwo" />
      </div>
    </>
  );
}

import React from 'react';
import Window from './Window';

export function Wrapper() {
  return (
    <>
      <div className="window userOne">
        <Window user="window__userOne" />
      </div>
      <div className="window userTwo">
        <Window user="window__userTwo" />
      </div>
    </>
  );
}

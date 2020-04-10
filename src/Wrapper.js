import React from 'react';
import Window from './Window';

export function Wrapper() {
  return (
    <>
        <Window user="userOne" />
        <div className="divider"></div>
        <Window user="userTwo" />
    </>
  );
}

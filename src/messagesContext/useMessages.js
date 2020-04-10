import { useContext } from 'react';
import { MessagesContext } from './MessagesContext';

export function useMessages() {
  const context = useContext(MessagesContext);

  console.log(context);

  if (!context) throw new Error('MessagesContext is used outside of the MessagesContextProvider');

  return context;
}

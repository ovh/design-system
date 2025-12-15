import { type Context, useContext as useReactContext } from 'react';

function useContext<T>(context: Context<T | undefined>): T {
  const contextValue = useReactContext(context);

  if (!contextValue) {
    throw new Error('useContext must be used within a Provider');
  }

  return contextValue;
}

export {
  useContext,
};

import { type JSX, type ReactNode, createContext, useContext } from 'react';

interface TileProviderProp {
  children: ReactNode,
  disabled: boolean,
  selected: boolean,
}

type TileContextType = Omit<TileProviderProp, 'children'>;

const TileContext = createContext<TileContextType>({
  disabled: false,
  selected: false,
});

function TileProvider({ children, disabled, selected }: TileProviderProp): JSX.Element {
  return (
    <TileContext.Provider value={{ disabled, selected }}>
      { children }
    </TileContext.Provider>
  );
}

function useTile(): TileContextType {
  return useContext(TileContext);
}

export {
  TileProvider,
  useTile,
};

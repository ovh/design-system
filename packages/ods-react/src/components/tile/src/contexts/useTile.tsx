import { type JSX, type ReactNode, createContext } from 'react';
import { useContext } from '../../../../utils/context';

interface TileRootProp {
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the component is selected.
   */
  selected?: boolean,
}

interface TileProviderProp extends Pick<TileRootProp, 'disabled' | 'selected'> {
  children: ReactNode,
}

type TileContextType = Omit<TileProviderProp, 'children'>;

const TileContext = createContext<TileContextType | undefined>(undefined);

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
  type TileRootProp,
  useTile,
};

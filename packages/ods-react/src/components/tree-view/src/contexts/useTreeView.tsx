import { type JSX, type ReactNode, createContext, useContext } from 'react';

export interface TreeViewItem<CustomData = Record<string, never>> {
  children?: Array<TreeViewItem<CustomData>>;
  customRendererData?: CustomData;
  disabled?: boolean;
  expanded?: boolean;
  id: string;
  name: string;
}

type TreeViewContextType = {
  disabled: boolean;
  /** @internal */
  getIndexPathForId: (id: string) => number[] | undefined;
  multiple: boolean;
};

interface TreeViewProviderProps extends TreeViewContextType {
  children: ReactNode;
}

const TreeViewContext = createContext<TreeViewContextType | undefined>(undefined);

function TreeViewProvider({ children, disabled, getIndexPathForId, multiple }: TreeViewProviderProps): JSX.Element {
  return (
    <TreeViewContext.Provider value={{ disabled, getIndexPathForId, multiple }}>
      { children }
    </TreeViewContext.Provider>
  );
}

function useTreeView(): TreeViewContextType {
  const context = useContext(TreeViewContext);
  if (!context) {
    throw new Error('useTreeView must be used within a TreeViewProvider');
  }
  return context;
}

export {
  type TreeViewContextType,
  TreeViewProvider,
  useTreeView,
};


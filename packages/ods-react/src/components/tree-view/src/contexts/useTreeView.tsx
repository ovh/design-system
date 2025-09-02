import { type JSX, type ReactNode, createContext, useContext } from 'react';

type TreeViewI18n = {
  addChild?: string;
  deleteNode?: string;
  expand?: string;
  collapse?: string;
};

type TreeViewContextType = {
  i18n: TreeViewI18n;
  multiple: boolean;
};

interface TreeViewProviderProps extends Partial<TreeViewContextType> {
  children: ReactNode;
}

const defaultI18n: TreeViewI18n = Object.freeze({
  addChild: 'Add child',
  collapse: 'Collapse',
  deleteNode: 'Delete',
  expand: 'Expand',
});

const TreeViewContext = createContext<TreeViewContextType>({
  i18n: defaultI18n,
  multiple: false,
});

function TreeViewProvider({ children, multiple = false, i18n = defaultI18n }: TreeViewProviderProps): JSX.Element {
  return (
    <TreeViewContext.Provider value={{ i18n, multiple }}>
      { children }
    </TreeViewContext.Provider>
  );
}

function useTreeView(): TreeViewContextType {
  return useContext(TreeViewContext);
}

export {
  type TreeViewI18n,
  type TreeViewContextType,
  TreeViewProvider,
  useTreeView,
};


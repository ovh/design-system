import { type JSX, type ReactNode, createContext, useContext } from 'react';

type TreeViewNodesContextType = {
  indexPath: number[];
};

interface TreeViewNodesProviderProps {
  children: ReactNode;
  indexPath: number[];
}

const TreeViewNodesContext = createContext<TreeViewNodesContextType>({
  indexPath: [],
});

function TreeViewNodesProvider({ children, indexPath }: TreeViewNodesProviderProps): JSX.Element {
  return (
    <TreeViewNodesContext.Provider value={{ indexPath }}>
      { children }
    </TreeViewNodesContext.Provider>
  );
}

function useTreeViewNodes(): TreeViewNodesContextType {
  return useContext(TreeViewNodesContext);
}

export {
  type TreeViewNodesContextType,
  TreeViewNodesProvider,
  useTreeViewNodes,
};

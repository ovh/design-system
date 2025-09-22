import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { TreeViewValueChangeDetail } from '../components/tree-view/TreeView';

// TODO apply on Select too
type CustomData = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

interface TreeViewItem<T = CustomData> {
  children?: Array<TreeViewItem<T>>;
  customRendererData?: T;
  disabled?: boolean;
  expanded?: boolean;
  id: string;
  name: string;
}

type TreeViewCustomRendererArg<T = CustomData> = {
  customData?: T;
  isBranch: boolean;
  isExpanded: boolean;
  item: TreeViewItem<T>;
};

// TODO add:
//  defaultExpandedValue
//  expandedValue
// TODO remove defaultExpandAll
type TreeViewRootProp = {
  /**
   * TODO add doc on each attribute.
   */
  defaultExpandAll?: boolean;
  defaultValue?: string[];
  disabled?: boolean;
  items: Array<TreeViewItem>;
  multiple?: boolean;
  onValueChange?: (details: TreeViewValueChangeDetail) => void;
  value?: string[];
}

type TreeViewContextType = Pick<TreeViewRootProp, 'disabled' | 'multiple'> & {
  getIndexPathForId: (id: string) => number[] | undefined;
};

interface TreeViewProviderProp extends TreeViewContextType {
  children: ReactNode;
}

const TreeViewContext = createContext<TreeViewContextType | undefined>(undefined);

function TreeViewProvider({ children, disabled, getIndexPathForId, multiple }: TreeViewProviderProp): JSX.Element {
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
  type TreeViewCustomRendererArg,
  type TreeViewItem,
  TreeViewProvider,
  type TreeViewRootProp,
  useTreeView,
};


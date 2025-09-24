import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { type TreeViewExpandedChangeDetail, type TreeViewValueChangeDetail } from '../components/tree-view/TreeView';

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

type TreeViewRootProp = {
  /**
   * The initial expanded value(s). Use when you don't need to control the expanded value(s) of the tree view.
   */
  defaultExpandedValue?: string[];
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the tree view.
   */
  defaultValue?: string[];
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * The controlled expanded value(s).
   */
  expandedValue?: string[];
  /**
   * The list of items
   */
  items: Array<TreeViewItem>;
  /**
   * Whether the multiple selection is allowed.
   */
  multiple?: boolean;
  /**
   * Callback fired when the expanded value(s) changes.
   */
  onExpandedChange?: (details: TreeViewExpandedChangeDetail) => void;
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (details: TreeViewValueChangeDetail) => void;
  /**
   * The controlled selected value(s).
   */
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


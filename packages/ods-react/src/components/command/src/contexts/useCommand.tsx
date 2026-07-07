import { type JSX, type ReactNode, createContext, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useContext } from '../../../../utils/context';

interface CommandProviderProp {
  children: ReactNode;
  open?: boolean;
}

interface CommandItem {
  isDisabled: boolean;
  text: string;
  value: string;
}

interface CommandContextType {
  filter: string;
  filteredItems: string[];
  highlightedValue: string | undefined;
  id: string;
  open: boolean;
  highlightItem: (value: string) => void;
  highlightNext: () => void;
  highlightPrevious: () => void;
  registerHandler: (value: string, handler: () => void) => void;
  registerItem: (value: string, node: HTMLElement | null, text: string, isDisabled: boolean) => void;
  selectHighlighted: () => void;
  setFilter: (value: string) => void;
  unregisterHandler: (value: string) => void;
  unregisterItem: (value: string) => void;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

function CommandProvider({ children, open }: CommandProviderProp): JSX.Element {
  const id = useId();
  const [filter, setFilter] = useState('');
  const [highlightedValue, setHighlightedValue] = useState<string | undefined>(undefined);
  const [items, setItems] = useState<CommandItem[]>([]);
  const handlersRef = useRef(new Map<string, VoidFunction>());
  const itemNodesRef = useRef(new Map<string, HTMLElement>());

  // Items register once and stay registered while filtered out; typing only
  // recomputes these derived lists. All matching options (disabled included)
  // drive the empty state...
  const filteredItems = useMemo(() => {
    const query = filter.toLowerCase();
    return items
      .filter((item) => !query || item.text.toLowerCase().includes(query))
      .map((item) => item.value);
  }, [filter, items]);

  // ...while only matching enabled options can be highlighted.
  const navigableItems = useMemo(() => {
    const query = filter.toLowerCase();
    return items
      .filter((item) => !item.isDisabled && (!query || item.text.toLowerCase().includes(query)))
      .map((item) => item.value);
  }, [filter, items]);

  useEffect(() => {
    if (!open) {
      setFilter('');
      setHighlightedValue(navigableItems[0]);
    }
  }, [open, navigableItems]);

  useEffect(() => {
    setHighlightedValue((current) => {
      if (navigableItems.length === 0) {
        return undefined;
      }
      if (!navigableItems.includes(current ?? '')) {
        return navigableItems[0];
      }
      return current;
    });
  }, [navigableItems]);

  // Items append on registration (cheap); re-sort once per membership change
  // into DOM order. Needed because a dynamically mounted option registers
  // after its siblings regardless of its position in the DOM.
  useEffect(() => {
    setItems((prev) => {
      const sorted = [...prev].sort((a, b) => {
        const nodeA = itemNodesRef.current.get(a.value);
        const nodeB = itemNodesRef.current.get(b.value);
        if (!nodeA || !nodeB) {
          return 0;
        }
        return nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      return sorted.every((item, index) => item === prev[index]) ? prev : sorted;
    });
  }, [items]);

  const registerItem = useCallback((value: string, node: HTMLElement | null, text: string, isDisabled: boolean): void => {
    if (node) {
      itemNodesRef.current.set(value, node);
    }
    setItems((prev) => {
      const existing = prev.find((item) => item.value === value);
      if (!existing) {
        return [...prev, { isDisabled, text, value }];
      }
      return existing.text === text && existing.isDisabled === isDisabled
        ? prev
        : prev.map((item) => (item.value === value ? { isDisabled, text, value } : item));
    });
  }, []);

  const unregisterItem = useCallback((value: string): void => {
    itemNodesRef.current.delete(value);
    setItems((prev) => prev.filter((item) => item.value !== value));
  }, []);

  const registerHandler = useCallback((value: string, handler: VoidFunction): void => {
    handlersRef.current.set(value, handler);
  }, []);

  const unregisterHandler = useCallback((value: string): void => {
    handlersRef.current.delete(value);
  }, []);

  const highlightNext = useCallback((): void => {
    if (!navigableItems.length) {
      return;
    }
    const idx = navigableItems.indexOf(highlightedValue ?? '');
    if (idx < navigableItems.length - 1) {
      setHighlightedValue(navigableItems[idx + 1]);
    }
  }, [navigableItems, highlightedValue]);

  const highlightPrevious = useCallback((): void => {
    if (!navigableItems.length) {
      return;
    }
    const idx = navigableItems.indexOf(highlightedValue ?? '');
    if (idx > 0) {
      setHighlightedValue(navigableItems[idx - 1]);
    }
  }, [navigableItems, highlightedValue]);

  const highlightItem = useCallback((value: string): void => {
    setHighlightedValue(value);
  }, []);

  const selectHighlighted = useCallback((): void => {
    if (highlightedValue) {
      handlersRef.current.get(highlightedValue)?.();
    }
  }, [highlightedValue]);

  const value = useMemo<CommandContextType>(() => ({
    filter,
    filteredItems,
    highlightItem,
    highlightNext,
    highlightPrevious,
    highlightedValue,
    id,
    open: open ?? false,
    registerHandler,
    registerItem,
    selectHighlighted,
    setFilter,
    unregisterHandler,
    unregisterItem,
  }), [
    filter,
    filteredItems,
    highlightItem,
    highlightNext,
    highlightPrevious,
    highlightedValue,
    id,
    open,
    registerHandler,
    registerItem,
    selectHighlighted,
    unregisterHandler,
    unregisterItem,
  ]);

  return (
    <CommandContext.Provider value={ value }>
      { children }
    </CommandContext.Provider>
  );
}

function useCommand(): CommandContextType {
  return useContext(CommandContext);
}

export {
  CommandProvider,
  type CommandContextType,
  useCommand,
};

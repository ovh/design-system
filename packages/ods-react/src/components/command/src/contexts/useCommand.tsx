import { type JSX, type ReactNode, createContext, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useContext } from '../../../../utils/context';

interface CommandProviderProp {
  children: ReactNode;
  open?: boolean;
}

interface CommandContextType {
  filter: string;
  highlightedValue: string | undefined;
  id: string;
  open: boolean;
  registeredItems: string[];
  highlightFirst: () => void;
  highlightItem: (value: string) => void;
  highlightLast: () => void;
  highlightNext: () => void;
  highlightPrevious: () => void;
  registerHandler: (value: string, handler: () => void) => void;
  registerItem: (value: string, node: HTMLElement) => void;
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
  const [registeredItems, setRegisteredItems] = useState<string[]>([]);
  const handlersRef = useRef(new Map<string, VoidFunction>());
  const itemNodesRef = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    if (!open) {
      setFilter('');
      setHighlightedValue(registeredItems[0]);
    }
  }, [open, registeredItems]);

  useEffect(() => {
    setHighlightedValue((current) => {
      if (registeredItems.length === 0) {
        return undefined;
      }
      if (!registeredItems.includes(current ?? '')) {
        return registeredItems[0];
      }
      return current;
    });
  }, [registeredItems]);

  // Items append on registration (cheap); re-sort once per batch into DOM order.
  // Needed because options re-register out of order when a filter is cleared.
  useEffect(() => {
    setRegisteredItems((prev) => {
      const sorted = [...prev].sort((a, b) => {
        const nodeA = itemNodesRef.current.get(a);
        const nodeB = itemNodesRef.current.get(b);
        if (!nodeA || !nodeB) {
          return 0;
        }
        return nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      return sorted.every((value, index) => value === prev[index]) ? prev : sorted;
    });
  }, [registeredItems]);

  const registerItem = useCallback((value: string, node: HTMLElement): void => {
    itemNodesRef.current.set(value, node);
    setRegisteredItems((prev) => (prev.includes(value) ? prev : [...prev, value]));
  }, []);

  const unregisterItem = useCallback((value: string): void => {
    itemNodesRef.current.delete(value);
    setRegisteredItems((prev) => prev.filter((v) => v !== value));
  }, []);

  const registerHandler = useCallback((value: string, handler: VoidFunction): void => {
    handlersRef.current.set(value, handler);
  }, []);

  const unregisterHandler = useCallback((value: string): void => {
    handlersRef.current.delete(value);
  }, []);

  const highlightNext = useCallback((): void => {
    if (!registeredItems.length) {
      return;
    }
    const idx = registeredItems.indexOf(highlightedValue ?? '');
    if (idx < registeredItems.length - 1) {
      setHighlightedValue(registeredItems[idx + 1]);
    }
  }, [registeredItems, highlightedValue]);

  const highlightPrevious = useCallback((): void => {
    if (!registeredItems.length) {
      return;
    }
    const idx = registeredItems.indexOf(highlightedValue ?? '');
    if (idx > 0) {
      setHighlightedValue(registeredItems[idx - 1]);
    }
  }, [registeredItems, highlightedValue]);

  const highlightFirst = useCallback((): void => {
    if (registeredItems.length) {
      setHighlightedValue(registeredItems[0]);
    }
  }, [registeredItems]);

  const highlightLast = useCallback((): void => {
    if (registeredItems.length) {
      setHighlightedValue(registeredItems[registeredItems.length - 1]);
    }
  }, [registeredItems]);

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
    highlightFirst,
    highlightItem,
    highlightLast,
    highlightNext,
    highlightPrevious,
    highlightedValue,
    id,
    open: open ?? false,
    registerHandler,
    registerItem,
    registeredItems,
    selectHighlighted,
    setFilter,
    unregisterHandler,
    unregisterItem,
  }), [
    filter,
    highlightFirst,
    highlightItem,
    highlightLast,
    highlightNext,
    highlightPrevious,
    highlightedValue,
    id,
    open,
    registerHandler,
    registerItem,
    registeredItems,
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

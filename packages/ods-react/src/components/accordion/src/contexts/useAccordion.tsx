import { type JSX, type ReactNode, createContext, useMemo } from 'react';
import { useContext } from '../../../../utils/context';
import { type AccordionEmphasis } from '../constants/accordion-emphasis';

interface AccordionProviderProp {
  children: ReactNode;
  emphasis: AccordionEmphasis;
}

type AccordionContextType = Omit<AccordionProviderProp, 'children'>;

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

function AccordionProvider({
  children,
  emphasis,
}: AccordionProviderProp): JSX.Element {
  const value = useMemo(() => ({ emphasis }), [emphasis]);

  return (
    <AccordionContext.Provider value={ value }>
      { children }
    </AccordionContext.Provider>
  );
}

function useAccordion(): AccordionContextType {
  return useContext(AccordionContext);
}

export {
  AccordionProvider,
  useAccordion,
};

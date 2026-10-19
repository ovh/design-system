import { type JSX, type ReactNode, createContext } from 'react';
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
  return (
    <AccordionContext.Provider value={{ emphasis }}>
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

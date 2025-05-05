import { type JSX, type ReactNode, createContext, useContext } from 'react';

type DatepickerContextType = {
  invalid?: boolean,
  required?: boolean,
}

interface DatepickerProviderProp extends DatepickerContextType {
  children: ReactNode,
}

const DatepickerContext = createContext<DatepickerContextType>({});

function DatepickerProvider({ children, invalid, required }: DatepickerProviderProp): JSX.Element {
  return (
    <DatepickerContext.Provider value={{
      invalid,
      required,
    }}>
      { children }
    </DatepickerContext.Provider>
  );
}

function useDatepicker(): DatepickerContextType {
  return useContext(DatepickerContext);
}

export {
  type DatepickerContextType,
  DatepickerProvider,
  useDatepicker,
};

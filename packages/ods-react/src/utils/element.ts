import { Children, type ReactElement, type ReactNode, isValidElement } from 'react';

function getValidChildren(children: ReactNode): ReactElement[] {
  return Children.toArray(children).filter(isValidElement);
}

export {
  getValidChildren,
};

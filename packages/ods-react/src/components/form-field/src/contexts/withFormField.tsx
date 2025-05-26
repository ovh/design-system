import { type ForwardRefExoticComponent, type ForwardedRef, type JSX, type PropsWithoutRef, type RefAttributes, forwardRef } from 'react';
import { useFormField } from './useFormField';

interface WithFormFieldProp {
  id?: string,
  invalid?: boolean,
}

function withFormField<T, P extends WithFormFieldProp>(
  WrappedComponent: ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  function WithFormFieldComponent({ id, invalid, ...props }: P, ref: ForwardedRef<T>): JSX.Element {
    const fieldContext = useFormField();

    return (
      <WrappedComponent
        { ...(props as PropsWithoutRef<P>) }
        id={ id || fieldContext?.id }
        invalid={ invalid || fieldContext?.invalid }
        ref={ ref } />
    );
  }

  WithFormFieldComponent.displayName = `withFormField(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return forwardRef<T, P>(WithFormFieldComponent);
}

export {
  type WithFormFieldProp,
  withFormField,
};

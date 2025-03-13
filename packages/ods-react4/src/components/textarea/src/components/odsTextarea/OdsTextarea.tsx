import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type FocusEvent, type JSX, forwardRef, useImperativeHandle, useState } from 'react';
import style from './odsTextarea.module.scss';

// TODO method clear & reset?
//  => not possible if we go the controlled way (which is probably the best)

interface OdsTextareaProp extends ComponentPropsWithRef<'textarea'> {
  // defaultValue?: string, // keep?
  hasError?: boolean,
  // isResizable // Do we want to propose this or let them use css "resize"
  name: string; // keep to enforce value is set?
}

const OdsTextarea: FC<OdsTextareaProp> = forwardRef(({
  className,
  hasError = false,
  name,
  ...props
}, ref): JSX.Element => {
  const [isInvalid, setIsInvalid] = useState(false);

  // @ts-ignore
  useImperativeHandle(ref, () => {
    return {
      clear() {
        // @ts-ignore
        if (ref.current) {
          // @ts-ignore
          ref.current.value = '';
        }
      }
    };
  }, []);

  function onBlur(event: FocusEvent<HTMLTextAreaElement>): void {
    setIsInvalid(!event.target.validity.valid);
  }

  function onInvalid(): void {
    setIsInvalid(true);
  }

  return (
    <textarea
      aria-multiline={ true }
      className={ classNames(
        style['ods-textarea'],
        { [style['ods-textarea--error']]: hasError || isInvalid },
        // { [style['ods-textarea--resizable']]: props },
        className,
      )}
      name={ name }
      onBlur={ onBlur }
      onInvalid={ onInvalid }
      ref={ ref }
      { ...props }>
    </textarea>
  );
});

export {
  OdsTextarea,
  type OdsTextareaProp,
}

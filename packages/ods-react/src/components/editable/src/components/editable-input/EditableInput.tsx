import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useEditable } from '../../contexts/useEditable';
import style from './editableInput.module.scss';

interface EditableInputProp extends ComponentPropsWithRef<'div'> {}

const EditableInput: FC<EditableInputProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { isEditing } = useEditable();

  if (!isEditing) {
    return <></>;
  }

  return (
    <div
      className={ classNames(style['editable-input'], className) }
      data-ods="editable-input"
      ref={ ref }
      { ...props }>
    </div>
  );
});

EditableInput.displayName = 'EditableInput';

export {
  EditableInput,
  type EditableInputProp,
};

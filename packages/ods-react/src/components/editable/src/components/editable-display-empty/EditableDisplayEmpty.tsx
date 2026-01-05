import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './editableDisplayEmpty.module.scss';

interface EditableDisplayEmptyProp extends ComponentPropsWithRef<'span'> {}

const EditableDisplayEmpty: FC<EditableDisplayEmptyProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['editable-display-empty'],
        className,
      )}
      data-ods="editable-display-empty"
      ref={ ref }
      { ...props }>
    </span>
  );
});

EditableDisplayEmpty.displayName = 'EditableDisplayEmpty';

export {
  EditableDisplayEmpty,
  type EditableDisplayEmptyProp,
};

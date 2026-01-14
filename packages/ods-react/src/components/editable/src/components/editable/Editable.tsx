import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { EditableProvider, type EditableRootProp } from '../../contexts/useEditable';
import style from './editable.module.scss';

interface EditableProp extends Omit<ComponentPropsWithRef<'div'>, 'onSubmit'>, EditableRootProp {}

const Editable: FC<EditableProp> = forwardRef(({
  children,
  className,
  defaultEditing,
  editing,
  i18n,
  locale,
  onCancel,
  onEditChange,
  onSubmit,
  ...props
}, ref): JSX.Element => {
  return (
    <EditableProvider
      defaultEditing={ defaultEditing }
      editing={ editing }
      i18n={ i18n }
      locale={ locale }
      onCancel={ onCancel }
      onEditChange={ onEditChange }
      onSubmit={ onSubmit }>
      <div
        className={ classNames(style['editable'], className) }
        data-ods="editable"
        ref={ ref }
        { ...props }>
        { children }
      </div>
    </EditableProvider>
  );
});

Editable.displayName = 'Editable';

export {
  Editable,
  type EditableProp,
};

import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useEditable } from '../../contexts/useEditable';
import style from './editableDisplay.module.scss';

interface EditableDisplayProp extends ComponentPropsWithRef<'div'> {}

const EditableDisplay: FC<EditableDisplayProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { isEditing, setIsEditing } = useEditable();

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className={ classNames(
        style['editable-display'],
        className,
        { [style['editable-display--hidden']]: isEditing },
      )}
      data-ods="editable-display"
      onDoubleClick={ () => setIsEditing(true) }
      ref={ ref }
      { ...props }>
    </div>
  );
});

EditableDisplay.displayName = 'EditableDisplay';

export {
  EditableDisplay,
  type EditableDisplayProp,
};

import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { useEditable } from '../../contexts/useEditable';
import { EditableCancelTrigger } from '../editable-cancel-trigger/EditableCancelTrigger';
import { EditableEditTrigger } from '../editable-edit-trigger/EditableEditTrigger';
import { EditableSubmitTrigger } from '../editable-submit-trigger/EditableSubmitTrigger';

interface EditableActionsProp extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  /**
   * Custom actions render function, that provides Editable current state.
   */
  children?: (props: { editing: boolean }) => ReactNode,
}

const DefaultActions = ({ isEditing }: { isEditing: boolean }): JSX.Element => (
  isEditing
    ? <>
      <EditableSubmitTrigger />
      <EditableCancelTrigger />
    </>
    : <EditableEditTrigger />
);

const EditableActions: FC<EditableActionsProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { isEditing } = useEditable();

  return (
    <div
      className={ className }
      ref={ ref }
      { ...props }>
      {
        children && typeof children === 'function'
          ? children({ editing: isEditing })
          : <DefaultActions isEditing={ isEditing } />
      }
    </div>
  );
});

EditableActions.displayName = 'EditableActions';

export {
  EditableActions,
  type EditableActionsProp,
};

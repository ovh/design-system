import { type JSX, type ReactNode, createContext, useEffect, useRef, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type Locale } from '../../../../utils/locales';
import { type EDITABLE_I18N } from '../constants/editable-i18n';

interface EditableEditingChangeDetail {
  editing: boolean,
}

interface EditableRootProp {
  /**
   * The initial editing state of the editable. Use when you don't need to control the editing state of the editable.
   */
  defaultEditing?: boolean,
  /**
   * The controlled editing state of the editable.
   */
  editing?: boolean
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<EDITABLE_I18N, string>>,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Callback fired when the cancel trigger is activated.
   */
  onCancel?: () => void
  /**
   * Callback fired when the editing state changes.
   */
  onEditChange?: (detail: EditableEditingChangeDetail) => void
  /**
   * Callback fired when the submit trigger is activated.
   */
  onSubmit?: () => void
}

interface EditableProviderProp extends EditableRootProp {
  children: ReactNode,
}

type EditableContextType = Omit<EditableProviderProp, 'children' | 'defaultEditing' | 'editing'> & {
  isEditing: boolean,
  setIsEditing: (value: boolean) => void,
};

const EditableContext = createContext<EditableContextType | undefined>(undefined);

function EditableProvider({
  children,
  defaultEditing,
  editing,
  i18n,
  locale,
  onCancel,
  onEditChange,
  onSubmit,
}: EditableProviderProp): JSX.Element {
  const isMountedRef = useRef(false);
  const [isEditing, setIsEditing] = useState(defaultEditing ?? false);
  const isControlled = typeof editing === 'boolean';

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    onEditChange?.({ editing: isEditing });
  }, [isEditing, onEditChange]);

  return (
    <EditableContext.Provider value={{
      i18n,
      isEditing: isControlled ? editing : isEditing,
      locale,
      onCancel,
      onEditChange,
      onSubmit,
      setIsEditing,
    }}>
      { children }
    </EditableContext.Provider>
  );
}

function useEditable(): EditableContextType {
  return useContext(EditableContext);
}

export {
  type EditableContextType,
  type EditableEditingChangeDetail,
  EditableProvider,
  type EditableProviderProp,
  type EditableRootProp,
  useEditable,
};

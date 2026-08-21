import { type JSX, useEffect, useMemo, useState } from 'react';
import { BUTTON_VARIANT, Button, Modal, ModalBody, ModalContent, TEXT_PRESET, Text, Textarea } from '../ods';
import styles from './themeGeneratorJSONModal.module.css';

/* Import/export of the whole variable set as JSON. */

interface ThemeGeneratorJSONProp {
  onClose: () => void;
  onReplace: (nextVariables: Record<string, string>) => void;
  open: boolean;
  variables: Record<string, string>;
}

const ThemeGeneratorJSONModal = ({ onClose, onReplace, open, variables }: ThemeGeneratorJSONProp): JSX.Element => {
  const initialText = useMemo(() => JSON.stringify(variables, null, 2), [variables]);
  const [textValue, setTextValue] = useState(initialText);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setTextValue(initialText);
      setError(null);
    }
  }, [open, initialText]);

  function handleReplace(): void {
    try {
      const parsed = JSON.parse(textValue);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        throw new Error('Expected a JSON object of { name: value }');
      }

      const next: Record<string, string> = {};
      Object.entries(parsed as Record<string, unknown>).forEach(([key, value]) => {
        next[key] = String(value ?? '');
      });
      onReplace(next);
      setError(null);
      onClose();
    } catch {
      setError('Invalid JSON. Please provide a valid JSON object.');
    }
  }

  return (
    <Modal onOpenChange={ ({ open }) => !open && onClose() } open={ open }>
      <ModalContent className={ styles['theme-generator-json-modal'] }>
        <ModalBody>
          <Text preset={ TEXT_PRESET.heading4 }>
            Theme variables (JSON)
          </Text>

          <Textarea
            className={ styles['theme-generator-json-modal__textarea'] }
            onChange={ (e) => setTextValue(e.target.value) }
            spellCheck={ false }
            value={ textValue } />

          { error && (
            <Text className={ styles['theme-generator-json-modal__error'] }>
              { error }
            </Text>
          ) }

          <div className={ styles['theme-generator-json-modal__actions'] }>
            <Button onClick={ handleReplace }>
              Apply
            </Button>

            <Button onClick={ onClose } variant={ BUTTON_VARIANT.ghost }>
              Close
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ThemeGeneratorJSONModal };

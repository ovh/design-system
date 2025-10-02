import React, { useEffect, useMemo, useState, type JSX } from 'react';
import { Button, BUTTON_VARIANT, Modal, ModalBody, ModalContent, Text, TEXT_PRESET } from '@ovhcloud/ods-react';
import styles from './themeGeneratorJSONModal.module.css';

interface ThemeGeneratorJSONProps {
  open: boolean;
  variables: Record<string, string>;
  onClose: () => void;
  onReplace: (nextVariables: Record<string, string>) => void;
}

const ThemeGeneratorJSONModal = ({ open, variables, onClose, onReplace }: ThemeGeneratorJSONProps): JSX.Element => {
  const initialText = useMemo(() => JSON.stringify(variables, null, 2), [variables]);
  const [textValue, setTextValue] = useState(initialText);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setTextValue(initialText);
      setError(null);
    }
  }, [open, initialText]);

  function handleReplace() {
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
    } catch (e) {
      setError('Invalid JSON. Please provide a valid JSON object.');
    }
  }

  function onOpenChange({ open }: { open: boolean }) {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal open={ open } onOpenChange={ onOpenChange }>
      <ModalContent className={styles['theme-generator-json-modal']}>
        <ModalBody>
          <Text preset={ TEXT_PRESET.heading4 }>
            Theme variables (JSON)
          </Text>

          <textarea
            className={ styles['theme-generator-json-modal__textarea'] }
            onChange={(e) => setTextValue(e.target.value)}
            spellCheck={false}
            value={ textValue } />

          { error && (
            <Text className={ styles['theme-generator-json-modal__error'] }>
              { error }
            </Text>
          )}

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



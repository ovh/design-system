import { BUTTON_COLOR, BUTTON_VARIANT, Button, Modal, ModalBody, ModalContent, Text, TEXT_PRESET, Textarea } from '@ovhcloud/ods-react';
import React, { type JSX, useCallback, useEffect, useState } from 'react';
import { type ColorVariable } from '../utils/colorParser';
import styles from './exportImportModal.module.scss';

interface ExportImportModalProps {
  open: boolean;
  onOpenChange: (details: { open: boolean }) => void;
  colors: ColorVariable[];
  onImportColors: (colors: ColorVariable[]) => void;
}

const ExportImportModal = ({ open, onOpenChange, colors, onImportColors }: ExportImportModalProps): JSX.Element => {
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && colors.length > 0) {
      const exportData = {
        colors: colors.map(color => ({
          name: color.name,
          value: color.value,
        })),
        exportedAt: new Date().toISOString(),
        version: '1.0',
      };
      setJsonText(JSON.stringify(exportData, null, 2));
      setError(null);
    }
  }, [open, colors]);

  const handleOpenChange = useCallback((details: { open: boolean }) => {
    onOpenChange(details);
  }, [onOpenChange]);

  const handleJsonChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonText(event.target.value);
    setError(null);
  }, []);

  const handleImport = useCallback(() => {
    try {
      const parsedData = JSON.parse(jsonText);
      
      if (!parsedData.colors || !Array.isArray(parsedData.colors)) {
        throw new Error('Invalid format: colors array is required');
      }

      const importedColors: ColorVariable[] = parsedData.colors.map((color: any) => ({
        name: color.name,
        value: color.value,
        category: '',
        subcategory: '',
      }));

      onImportColors(importedColors);
      onOpenChange({ open: false });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
    }
  }, [jsonText, onImportColors, onOpenChange]);


  return (
    <Modal
    open={ open }
    onOpenChange={ handleOpenChange }>
      <ModalContent
        className={ styles['export-import-modal'] }
      >
        <ModalBody>
          <Text preset={ TEXT_PRESET.heading3 }>
            Import Theme Configuration
          </Text>
          <Text preset={ TEXT_PRESET.paragraph }>
            Paste your theme JSON configuration below to apply custom colors to the theme generator. 
          </Text>
          
          <div className={ styles['export-import-modal__content'] }>
              <Textarea
                className={ styles['export-import-modal__textarea'] }
                invalid={ !!error }
                value={ jsonText }
                onChange={ handleJsonChange }
                placeholder="Paste your theme JSON here..."
                rows={ 20 }
              />
              
              { error && (
                <div className={ styles['export-import-modal__error'] }>
                  <Text preset={ TEXT_PRESET.paragraph }>
                    Error: { error }
                  </Text>
                </div>
              )}
            </div>

          <div className={ styles['export-import-modal__footer'] }>
            <Button
              color={ BUTTON_COLOR.neutral }
              variant={ BUTTON_VARIANT.ghost }
              onClick={ () => onOpenChange({ open: false }) }>
              Cancel
            </Button>
            <Button
              color={ BUTTON_COLOR.primary }
              variant={ BUTTON_VARIANT.default }
              onClick={ handleImport }
              disabled={ !jsonText.trim() }>
              Apply
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ExportImportModal };

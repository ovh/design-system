import React, { type JSX } from 'react';
import {
  Button,
  BUTTON_COLOR,
  BUTTON_VARIANT,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  TEXT_PRESET,
} from '@ovhcloud/ods-react';
import styles from './themeGeneratorSwitchThemeModal.module.css';

interface ThemeGeneratorSwitchThemeModalProps {
  open: boolean;
  targetTheme?: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const ThemeGeneratorSwitchThemeModal = ({
  open,
  targetTheme,
  onConfirm,
  onCancel,
}: ThemeGeneratorSwitchThemeModalProps): JSX.Element => {
  function onOpenChange({ open }: { open: boolean }) {
    if (!open) {
      onCancel();
    }
  }

  const targetLabel = targetTheme
    ? targetTheme.charAt(0).toUpperCase() + targetTheme.slice(1)
    : '';

  return (
    <Modal open={ open } onOpenChange={ onOpenChange }>
      <ModalContent>
        <ModalBody>
          <Text preset={ TEXT_PRESET.heading4 }>
            Leave custom theme?
          </Text>

          <Text>
            You have unsaved customizations. Switching to { targetLabel || 'another theme' } will discard them.
          </Text>

          <div className={ styles['theme-generator-switch-theme-modal__actions'] }>
            <Button onClick={ onConfirm } color={ BUTTON_COLOR.critical }>
              Switch to { targetLabel || 'theme' }
            </Button>

            <Button onClick={ onCancel } variant={ BUTTON_VARIANT.outline }>
              Stay on Custom
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ThemeGeneratorSwitchThemeModal };

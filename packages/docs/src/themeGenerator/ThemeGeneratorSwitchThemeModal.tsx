import { type JSX } from 'react';
import { BUTTON_EMPHASIS, BUTTON_STATUS, Button, Modal, ModalBody, ModalContent, TEXT_PRESET, Text } from '../ods';
import styles from './themeGeneratorSwitchThemeModal.module.css';

/* Confirmation before discarding an edited custom theme. */

interface ThemeGeneratorSwitchThemeModalProp {
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
  targetTheme?: string | null;
}

const ThemeGeneratorSwitchThemeModal = ({ onCancel, onConfirm, open, targetTheme }: ThemeGeneratorSwitchThemeModalProp): JSX.Element => {
  const targetLabel = targetTheme ? targetTheme.charAt(0).toUpperCase() + targetTheme.slice(1) : '';

  return (
    <Modal onOpenChange={ ({ open }) => !open && onCancel() } open={ open }>
      <ModalContent>
        <ModalBody>
          <Text preset={ TEXT_PRESET.heading4 }>
            Leave custom theme?
          </Text>

          <Text>
            You have unsaved customizations. Switching to { targetLabel || 'another theme' } will discard them.
          </Text>

          <div className={ styles['theme-generator-switch-theme-modal__actions'] }>
            <Button emphasis={ BUTTON_EMPHASIS.medium } onClick={ onCancel }>
              Stay on Custom
            </Button>

            <Button emphasis={ BUTTON_EMPHASIS.high } status={ BUTTON_STATUS.critical } onClick={ onConfirm }>
              Switch to { targetLabel || 'theme' }
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ThemeGeneratorSwitchThemeModal };

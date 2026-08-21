import { type JSX } from 'react';
import { BUTTON_COLOR, BUTTON_VARIANT, Button, MODAL_COLOR, Modal, ModalBody, ModalContent, TEXT_PRESET, Text } from '../ods';
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
      <ModalContent color={ MODAL_COLOR.warning }>
        <ModalBody>
          <Text preset={ TEXT_PRESET.heading4 }>
            Leave custom theme?
          </Text>

          <Text>
            You have unsaved customizations. Switching to { targetLabel || 'another theme' } will discard them.
          </Text>

          <div className={ styles['theme-generator-switch-theme-modal__actions'] }>
            <Button onClick={ onCancel } variant={ BUTTON_VARIANT.outline }>
              Stay on Custom
            </Button>

            <Button color={ BUTTON_COLOR.critical } onClick={ onConfirm }>
              Switch to { targetLabel || 'theme' }
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ThemeGeneratorSwitchThemeModal };

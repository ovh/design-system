import { BUTTON_COLOR, BUTTON_VARIANT, Button, Modal, ModalBody, ModalContent, Switch, SwitchItem, Text, TEXT_PRESET } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import React, { type JSX, useCallback, useState } from 'react';
import styles from './themeSwitch.module.scss';

export const THEME_OPTIONS = {
  default: 'Default',
  test: 'Test',
  custom: 'Custom',
} as const;

export type ThemeOption = keyof typeof THEME_OPTIONS;

interface ThemeSwitchProps {
  currentTheme: ThemeOption;
  onThemeChange: (theme: ThemeOption) => void;
  className?: string;
}

const ThemeSwitch = ({ currentTheme, onThemeChange, className }: ThemeSwitchProps): JSX.Element => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<ThemeOption | null>(null);

  const handleValueChange = useCallback((details: { value: string }) => {
    const requested = details.value as ThemeOption;
    if (requested === currentTheme) {
      return;
    }
    if (currentTheme === 'custom') {
      setPendingTheme(requested);
      setIsConfirmOpen(true);
    } else {
      onThemeChange(requested);
    }
  }, [currentTheme, onThemeChange]);

  const handleCancel = useCallback(() => {
    setIsConfirmOpen(false);
    setPendingTheme(null);
  }, []);

  const handleConfirm = useCallback(() => {
    if (pendingTheme && pendingTheme !== currentTheme) {
      onThemeChange(pendingTheme);
    }
    setIsConfirmOpen(false);
    setPendingTheme(null);
  }, [currentTheme, onThemeChange, pendingTheme]);

  return (
    <div className={ classNames(styles['theme-switch'], className) }>
      <span className={ styles['theme-switch__label'] }>
        Theme:
      </span>
      <Switch
        value={ currentTheme }
        onValueChange={ handleValueChange }>
        { Object.entries(THEME_OPTIONS).map(([key, label]) => (
          <SwitchItem key={ key } value={ key }>
            { label }
          </SwitchItem>
        ))}
      </Switch>

      <Modal
        open={ isConfirmOpen }
        onOpenChange={ ({ open }) => setIsConfirmOpen(open) }>
        <ModalContent>
          <ModalBody>
            <Text preset={ TEXT_PRESET.heading4 }>
              Switch theme?
            </Text>
            <Text preset={ TEXT_PRESET.paragraph }>
              Switching theme will erase your current changes.
            </Text>

            <div className={ styles['theme-switch__actions'] }>
              <Button
                color={ BUTTON_COLOR.neutral }
                onClick={ handleCancel }
                variant={ BUTTON_VARIANT.ghost }>
                Cancel
              </Button>
              <Button
                color={ BUTTON_COLOR.critical }
                onClick={ handleConfirm }>
                Confirm
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { ThemeSwitch };

import { Splitter } from '@ark-ui/react/splitter';
import React, { type JSX, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, BUTTON_COLOR, BUTTON_VARIANT, Icon, ICON_NAME, Switch, type SwitchValueChangeDetail, SwitchItem } from '@ovhcloud/ods-react';
import { resolveTokenValues } from '../../helpers/designTokens';
import { ResetTheme } from '../resetTheme/ResetTheme';
import { ORIENTATION, OrientationSwitch } from '../sandbox/actions/OrientationSwitch';
import styles from './themeGenerator.module.css';
import { ThemeGeneratorTreeView } from './themeGeneratorTreeView/ThemeGeneratorTreeView';
import { ThemeGeneratorPreview } from './themeGeneratorPreview/ThemeGeneratorPreview';
import { ThemeGeneratorSwitchThemeModal } from './themeGeneratorSwitchThemeModal/ThemeGeneratorSwitchThemeModal';
import { ThemeGeneratorJSONModal } from './themeGeneratorJSONModal/ThemeGeneratorJSONModal';
import defaultTokens from '@ovhcloud/ods-themes/default/tokens';
import { ThemeGeneratorPaletteModal } from './themeGeneratorPaletteModal/ThemeGeneratorPaletteModal';

const ThemeGenerator = (): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState(ORIENTATION.horizontal);
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [editedVariables, setEditedVariables] = useState<Record<string, string>>({});
  const [debouncedVariables, setDebouncedVariables] = useState<Record<string, string>>({});
  const [isCustomTheme, setIsCustomTheme] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [isJsonOpen, setIsJsonOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const rootTokens = useMemo(() => {
    return resolveTokenValues(defaultTokens.root);
  }, [defaultTokens]);

  useEffect(() => {
    if (selectedTheme === 'custom') {
      setIsCustomTheme(true);
      return;
    }

    const tokens = rootTokens;
    setEditedVariables(tokens);
    setDebouncedVariables(tokens);
    setIsCustomTheme(false);
  }, [selectedTheme]);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      setDebouncedVariables(editedVariables);
    }, 150);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [editedVariables]);

  function handleSwitchThemeConfirm() {
    if (pendingTheme) {
      setSelectedTheme(pendingTheme);
    }
    setPendingTheme(null);
    setIsConfirmOpen(false);
  }

  function handleSwitchThemeCancel() {
    setPendingTheme(null);
    setIsConfirmOpen(false);
  }

  function handlePaletteApply(variables: Record<string, string>) {
    setEditedVariables((prev) => ({
      ...prev,
      ...variables,
    }));
    setSelectedTheme('custom');
    setIsCustomTheme(true);
  }

  function handleJsonReplace(next: Record<string, string>) {
    setEditedVariables(next);
    setSelectedTheme('custom');
    setIsCustomTheme(true);
  }

  function handleThemeValueChange(details: SwitchValueChangeDetail) {
    const next = details.value;
    const isLeavingCustom = isCustomTheme && next !== 'custom';

    if (isLeavingCustom) {
      setPendingTheme(next);
      setIsConfirmOpen(true);
      return;
    }

    setSelectedTheme(next);
  }

  function onToggleFullscreen() {
    setIsFullscreen((v) => !v);
  }

  function onVariableChange(name: string, value: string) {
    setEditedVariables((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (!isCustomTheme) {
      setSelectedTheme('custom');
      setIsCustomTheme(true);
    }
  }

  return (
    <div className={ styles['theme-generator-wrapper'] }>
      <ResetTheme style={{ height: 'inherit' }}>
        <div className={ classNames(
          styles['theme-generator'],
          { [ styles['theme-generator--fullscreen']]: isFullscreen },
        )}>
            <div className={ styles['theme-generator__menu'] }>
              <div className={styles['theme-generator__menu__left']}>
                <Button
                  onClick={ () => setIsJsonOpen(true) }
                  variant={ BUTTON_VARIANT.ghost }>
                  <Icon name={ ICON_NAME.chevronLeftUnderscore } />
                  JSON
                </Button>

                <Switch
                  onValueChange={ handleThemeValueChange }
                  value={ selectedTheme }>
                  <SwitchItem value="default">
                    Default
                  </SwitchItem>

                  <SwitchItem value="custom">
                    Custom
                  </SwitchItem>
                </Switch>

                <Button
                  onClick={ () => setIsPaletteOpen(true) }
                  variant={ BUTTON_VARIANT.ghost }>
                  <Icon name={ ICON_NAME.magicWand } />
                  Generate palette
                </Button>
              </div>

              <div className={ styles['theme-generator__menu__right'] }>
                <OrientationSwitch
                  onChange={ (value) => setOrientation(value) }
                  orientation={ orientation } />

                <Button
                  onClick={ onToggleFullscreen }
                  variant={ BUTTON_VARIANT.ghost }>
                  <Icon name={ isFullscreen ? ICON_NAME.shrink : ICON_NAME.resize } />
                </Button>
              </div>
            </div>

            <Splitter.Root
              className={ styles['theme-generator__container'] }
              orientation={ orientation }
              panels={ [{ id: 'tree-view', minSize: 10 }, { id: 'preview', minSize: 10 }] }>
              <Splitter.Panel
                id="tree-view"
                style={{ overflow: 'auto' }}>
                <ThemeGeneratorTreeView
                  onVariableChange={ onVariableChange }
                  variables={ editedVariables } />
              </Splitter.Panel>

              <Splitter.ResizeTrigger
                aria-label="Resize"
                asChild
                id="tree-view:preview">
                <Button
                  className={ classNames(
                    styles['theme-generator__container__resize'],
                    { [styles['theme-generator__container__resize--horizontal']]: orientation === ORIENTATION.horizontal },
                    { [styles['theme-generator__container__resize--vertical']]: orientation === ORIENTATION.vertical },
                  )}
                  color={ BUTTON_COLOR.neutral } />
              </Splitter.ResizeTrigger>

              <Splitter.Panel
                id="preview"
                style={{ overflow: 'auto' }}>
                <div style={ debouncedVariables }>
                  <ThemeGeneratorPreview />
                </div>
              </Splitter.Panel>
            </Splitter.Root>

            <ThemeGeneratorSwitchThemeModal
              onCancel={ handleSwitchThemeCancel }
              onConfirm={ handleSwitchThemeConfirm }
              open={ isConfirmOpen }
              targetTheme={ pendingTheme } />

            <ThemeGeneratorPaletteModal
              currentVariables={ editedVariables }
              onApply={ handlePaletteApply }
              onClose={ () => setIsPaletteOpen(false) }
              open={ isPaletteOpen } />

            <ThemeGeneratorJSONModal
              onClose={ () => setIsJsonOpen(false) }
              onReplace={ handleJsonReplace }
              open={ isJsonOpen }
              variables={ editedVariables } />
        </div>
      </ResetTheme>
    </div>
  );
}

export {
  ThemeGenerator,
};

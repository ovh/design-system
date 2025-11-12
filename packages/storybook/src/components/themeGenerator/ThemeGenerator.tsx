import { Splitter } from '@ark-ui/react/splitter';
import React, { type JSX, useCallback, useEffect, useMemo, useRef, useState, useTransition } from 'react';
import classNames from 'classnames';
import { Button, BUTTON_COLOR, BUTTON_VARIANT, Icon, ICON_NAME, Switch, type SwitchValueChangeDetail, SwitchItem } from '@ovhcloud/ods-react';
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
  const [isPending, startTransition] = useTransition();
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selectedTheme === 'custom') {
      setIsCustomTheme(true);
      return;
    }

    const tokens = defaultTokens.root;
    setEditedVariables(tokens);
    setDebouncedVariables(tokens);
    setIsCustomTheme(false);
  }, [selectedTheme]);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      startTransition(() => {
        setDebouncedVariables(editedVariables);
      });
    }, 150);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [editedVariables]);

  const previewStyle = useMemo(() => {
    return debouncedVariables as React.CSSProperties;
  }, [debouncedVariables]);

  function onToggleFullscreen() {
    setIsFullscreen((v) => !v);
  }

  const onVariableChange = useCallback((name: string, value: string) => {
    setEditedVariables((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (!isCustomTheme) {
      setSelectedTheme('custom');
      setIsCustomTheme(true);
    }
  }, [isCustomTheme]);

  const onOrientationChange = useCallback((value: ORIENTATION) => {
    setOrientation(value);
  }, []);

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

  return <div className={ classNames(
      styles['theme-generator'],
      { [ styles['theme-generator--fullscreen']]: isFullscreen },
    )}>
      <div className={ styles['theme-generator__menu'] }>
        <div className={styles['theme-generator__menu__left']}>
          <Button
            variant={ BUTTON_VARIANT.ghost }
            onClick={ () => setIsJsonOpen(true) }>
            <Icon name={ ICON_NAME.chevronLeftUnderscore } />
            JSON
          </Button>
          <Switch
            value={selectedTheme}
            onValueChange={handleThemeValueChange}
            >
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
            <Icon name={ ICON_NAME.magicWand }/>
            Generate palette
          </Button>
        </div>
        <div className={styles['theme-generator__menu__right']}>
          <OrientationSwitch
            onChange={ onOrientationChange }
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
      <Splitter.Panel id="tree-view">
        <ThemeGeneratorTreeView
          variables={editedVariables}
          onVariableChange={onVariableChange} />
      </Splitter.Panel>

      <Splitter.ResizeTrigger
        asChild
        aria-label="Resize"
        id="tree-view:preview">
        <Button
          className={ classNames(
            styles['theme-generator__container__resize'],
            { [styles['theme-generator__container__resize--horizontal']]: orientation === ORIENTATION.horizontal },
            { [styles['theme-generator__container__resize--vertical']]: orientation === ORIENTATION.vertical },
          )}
          color={ BUTTON_COLOR.neutral } />
      </Splitter.ResizeTrigger>

      <Splitter.Panel id="preview">
        <div 
          className={ classNames(
            styles['theme-generator__container__preview'],
            { [styles['theme-generator__container__preview--updating']]: isPending }
          )}
          style={previewStyle}>
          <ThemeGeneratorPreview />
        </div>
      </Splitter.Panel>
    </Splitter.Root>

    <ThemeGeneratorSwitchThemeModal
      open={ isConfirmOpen }
      targetTheme={ pendingTheme }
      onConfirm={ handleSwitchThemeConfirm }
      onCancel={ handleSwitchThemeCancel }
    />

    <ThemeGeneratorPaletteModal
      open={ isPaletteOpen }
      onClose={ () => setIsPaletteOpen(false) }
      currentVariables={ editedVariables }
      onApply={ handlePaletteApply }
    />

    <ThemeGeneratorJSONModal
      open={ isJsonOpen }
      variables={ editedVariables }
      onClose={ () => setIsJsonOpen(false) }
      onReplace={ handleJsonReplace }
    />
    </div>
}

export { ThemeGenerator };

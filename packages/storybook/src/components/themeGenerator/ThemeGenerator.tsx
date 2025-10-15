import { Splitter } from '@ark-ui/react/splitter';
import React, { type JSX, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, BUTTON_COLOR, BUTTON_VARIANT, Icon, ICON_NAME, Switch, type SwitchValueChangeDetail, SwitchItem } from '@ovhcloud/ods-react';
import { ORIENTATION, OrientationSwitch } from '../sandbox/actions/OrientationSwitch';
import styles from './themeGenerator.module.css';
import { ThemeGeneratorTreeView } from './ThemeGeneratorTreeView/ThemeGeneratorTreeView';
import { ThemeGeneratorPreview } from './themeGeneratorPreview/ThemeGeneratorPreview';
import { ThemeGeneratorSwitchThemeModal } from './themeGeneratorSwitchThemeModal/ThemeGeneratorSwitchThemeModal';
import { ThemeGeneratorJSONModal } from './themeGeneratorJSONModal/ThemeGeneratorJSONModal';
import defaultTokens from '@ovhcloud/ods-themes/default/tokens';
import developerTokens from '@ovhcloud/ods-themes/developer/tokens';

const ThemeGenerator = (): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState(ORIENTATION.horizontal);
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [editedVariables, setEditedVariables] = useState<Record<string, string>>({});
  const [isCustomTheme, setIsCustomTheme] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [isJsonOpen, setIsJsonOpen] = useState(false);

  useEffect(() => {
    if (selectedTheme === 'custom') {
      setIsCustomTheme(true);
      return;
    }

    const themeTokens = selectedTheme === 'developer' ? developerTokens : defaultTokens;
    setEditedVariables(themeTokens.root);
    setIsCustomTheme(false);
  }, [selectedTheme]);


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
            onValueChange={(details: SwitchValueChangeDetail) => {
              const next = details.value;
              const isLeavingCustom = isCustomTheme && next !== 'custom';

              if (isLeavingCustom) {
                setPendingTheme(next);
                setIsConfirmOpen(true);
                return;
              }

              setSelectedTheme(next);
            }}
            >
            <SwitchItem value="default">
              Default
            </SwitchItem>
            <SwitchItem value="developer">
              Developer
            </SwitchItem>
            <SwitchItem value="custom">
              Custom
            </SwitchItem>
          </Switch>
        </div>
        <div className={styles['theme-generator__menu__right']}>
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
        <div className={ styles['theme-generator__container__preview'] }>
          <ThemeGeneratorPreview themeVariables={editedVariables} />
        </div>
      </Splitter.Panel>
    </Splitter.Root>

    <ThemeGeneratorSwitchThemeModal
      open={ isConfirmOpen }
      targetTheme={ pendingTheme }
      onConfirm={() => {
        if (pendingTheme) {
          setSelectedTheme(pendingTheme);
        }
        setPendingTheme(null);
        setIsConfirmOpen(false);
      }}
      onCancel={() => {
        setPendingTheme(null);
        setIsConfirmOpen(false);
      }}
    />

    <ThemeGeneratorJSONModal
      open={ isJsonOpen }
      variables={ editedVariables }
      onClose={ () => setIsJsonOpen(false) }
      onReplace={(next) => {
        setEditedVariables(next);
        setSelectedTheme('custom');
        setIsCustomTheme(true);
      }}
    />
    </div>
}

export { ThemeGenerator };

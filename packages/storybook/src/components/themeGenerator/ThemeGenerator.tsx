import { Splitter } from '@ark-ui/react/splitter';
import React, { type JSX, useEffect, useState } from 'react';
import classNames from 'classnames';
import * as ODSReact from '@ovhcloud/ods-react';
import { ORIENTATION, OrientationSwitch } from '../sandbox/actions/OrientationSwitch';
import styles from './themeGenerator.module.css';
import { ThemeGeneratorTreeView } from './themeGeneratorTreeView/ThemeGeneratorTreeView';
import { ThemeGeneratorPreview } from './themeGeneratorPreview/ThemeGeneratorPreview';
import { parseCssVariables } from './useThemeGenerator';
import { ThemeGeneratorModal } from './themeGeneratorModal/ThemeGeneratorModal';
import { ThemeGeneratorJSON } from './themeGeneratorJSON/ThemeGeneratorJSON';

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
    const loadTheme = async () => {
      if (selectedTheme === 'custom') {
        setIsCustomTheme(true);
        return;
      }
      
      try {
        console.log('Selected theme:', selectedTheme);
        
        // Fetch the CSS file from the static directory
        // Path: /themes/{themeName}/index.css (exposed via staticDirs in main.ts)
        const response = await fetch(`/themes/${selectedTheme}/index.css`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch theme: ${response.statusText}`);
        }
        
        const cssContent = await response.text();

        // Parse CSS variables
        const variables = parseCssVariables(cssContent);
        console.log('Parsed variables:', Object.keys(variables).length, 'variables found');
        setEditedVariables(variables);
        setIsCustomTheme(false);
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, [selectedTheme]);


  function onToggleFullscreen() {
    setIsFullscreen((v) => !v);
  }

  function onVariableChange(name: string, value: string) {
    setEditedVariables((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Automatically switch to custom theme when user edits a variable
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
          <ODSReact.Button
            variant={ ODSReact.BUTTON_VARIANT.ghost }
            onClick={ () => setIsJsonOpen(true) }>
            <ODSReact.Icon name={ODSReact.ICON_NAME.chevronLeftUnderscore} />
            JSON
          </ODSReact.Button>
          <ODSReact.Switch 
            value={selectedTheme}
            onValueChange={(details: { value: string }) => {
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
            <ODSReact.SwitchItem value="default">
              Default
            </ODSReact.SwitchItem>
            <ODSReact.SwitchItem value="developer">
              Developer
            </ODSReact.SwitchItem>
            <ODSReact.SwitchItem value="custom">
              Custom
            </ODSReact.SwitchItem>
          </ODSReact.Switch>
        </div>
        <div className={styles['theme-generator__menu__right']}>
          <OrientationSwitch
            onChange={ (value) => setOrientation(value) }
            orientation={ orientation } />

          <ODSReact.Button
            onClick={ onToggleFullscreen }
            variant={ ODSReact.BUTTON_VARIANT.ghost }>
            <ODSReact.Icon name={ isFullscreen ? ODSReact.ICON_NAME.shrink : ODSReact.ICON_NAME.resize } />
          </ODSReact.Button>
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
        <ODSReact.Button
          className={ classNames(
            styles['theme-generator__container__resize'],
            { [styles['theme-generator__container__resize--horizontal']]: orientation === ORIENTATION.horizontal },
            { [styles['theme-generator__container__resize--vertical']]: orientation === ORIENTATION.vertical },
          )}
          color={ ODSReact.BUTTON_COLOR.neutral } />
      </Splitter.ResizeTrigger>

      <Splitter.Panel id="preview">
        <div className={ styles['theme-generator__container__preview'] }>
          <ThemeGeneratorPreview themeVariables={editedVariables} />
        </div>
      </Splitter.Panel>
    </Splitter.Root>

    <ThemeGeneratorModal
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

    <ThemeGeneratorJSON
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

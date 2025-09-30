import { Splitter } from '@ark-ui/react';
import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Icon, Spinner, SPINNER_SIZE } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import React, { type JSX, useCallback, useEffect, useState } from 'react';
import { ExportImportButton } from './actions/ExportImportButton';
import { ORIENTATION, OrientationSwitch } from './actions/OrientationSwitch';
import { ResetThemeGenerator } from './actions/ResetThemeGenerator';
import { ThemeSwitch, type ThemeOption } from './actions/ThemeSwitch';
import { ColorTreeView } from './components/ColorTreeView';
import { ExportImportModal } from './components/ExportImportModal';
import { ThemePreview } from './components/ThemePreview';
import { type ColorVariable, loadThemeColors } from './utils/colorParser';
import { applyCustomTheme, enableCustomTheme, clearCustomTheme } from './utils/themeApplicator';
import styles from './themeGenerator.module.scss';

const ThemeGenerator = (): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState(ORIENTATION.horizontal);
  const [colors, setColors] = useState<ColorVariable[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>('default');
  const [isExportImportModalOpen, setIsExportImportModalOpen] = useState(false);

  useEffect(() => {
    // Avoid reloading colors when editing custom theme to prevent flicker
    if (currentTheme === 'custom') {
      return;
    }
    const loadColors = async () => {
      setIsLoading(true);
      try {
        const themeColors = await loadThemeColors(currentTheme);
        setColors(themeColors);
      } catch (error) {
        console.error('Failed to load theme colors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadColors();
  }, [currentTheme]);

  useEffect(() => {
    if (colors.length > 0) {
      const containerId = 'theme-preview-container';
      applyCustomTheme(colors, containerId);
      enableCustomTheme(containerId);
    }
  }, [colors]);

  useEffect(() => {
    return () => {
      const containerId = 'theme-preview-container';
      clearCustomTheme(containerId);
    };
  }, []);

  const handleColorChange = useCallback((colorName: string, newValue: string) => {
    setColors(prevColors =>
      prevColors.map(color =>
        color.name === colorName
          ? { ...color, value: newValue }
          : color
      )
    );
    setCurrentTheme('custom');
  }, []);

  const handleThemeChange = useCallback((theme: ThemeOption) => {
    setCurrentTheme(theme);
  }, []);

  function onReset() {
    const loadOriginalColors = async () => {
      setIsLoading(true);
      try {
        const originalColors = await loadThemeColors(currentTheme);
        setColors(originalColors);
      } catch (error) {
        console.error('Failed to reset theme colors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOriginalColors();
  }

  function onToggleFullscreen() {
    setIsFullscreen((v) => !v);
  }

  const handleExportImportClick = useCallback(() => {
    setIsExportImportModalOpen(true);
  }, []);

  const handleExportImportOpenChange = useCallback((details: { open: boolean }) => {
    setIsExportImportModalOpen(details.open);
  }, []);

  const handleImportColors = useCallback((importedColors: ColorVariable[]) => {
    setColors(importedColors);
  }, []);

  return (
    <div className={ classNames(
      styles['theme-generator'],
      { [styles['theme-generator--fullscreen']]: isFullscreen },
    )}>
      <div className={ styles['theme-generator__menu'] }>
        <div className={ styles['theme-generator__menu__left'] }>
          <ExportImportButton onClick={ handleExportImportClick } />

          <ThemeSwitch
            currentTheme={ currentTheme }
            onThemeChange={ handleThemeChange } />
        </div>

        <div className={ styles['theme-generator__menu__right'] }>
          <ResetThemeGenerator onConfirm={ onReset } />

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

      <div className={ styles['theme-generator__container'] }>
        <Splitter.Root
          className={ styles['theme-generator__splitter'] }
          orientation={ orientation }
          panels={ [{ id: 'editor', minSize: 10 }, { id: 'preview', minSize: 10 }] }>
          <Splitter.Panel id="editor" className={ styles['theme-generator__splitter__editor'] }>
            <div className={ styles['theme-generator__container__content'] }>
              { isLoading && currentTheme !== 'custom' && (
                <div className={ styles['theme-generator__loading'] }>
                  <Spinner size={ SPINNER_SIZE.md } />
                  <span style={{ marginLeft: 8 }}>Loading theme colors...</span>
                </div>
              )}
              <ColorTreeView
                colors={ colors }
                onColorChange={ handleColorChange }
              />
            </div>
          </Splitter.Panel>

          <Splitter.ResizeTrigger
            asChild
            aria-label="Resize"
            id="editor:preview">
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
              id="theme-preview-container"
              className={ styles['theme-generator__container__preview'] }>
              <ThemePreview />
            </div>
          </Splitter.Panel>
        </Splitter.Root>
      </div>

      <ExportImportModal
        open={ isExportImportModalOpen }
        onOpenChange={ handleExportImportOpenChange }
        colors={ colors }
        onImportColors={ handleImportColors }
      />
    </div>
  );
};

export { ThemeGenerator };

import { Splitter } from '@ark-ui/react/splitter';
import { type JSX, useEffect, useMemo, useRef, useState } from 'react';
import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button, ICON_NAME, Icon, Switch, SwitchItem, type SwitchValueChangeDetail } from '../ods';
import { DemoFrame } from '../demo/DemoFrame';
import { resolveTokenValues } from '../doc/ports/helpers/designTokens';
import { ThemeGeneratorJSONModal } from './ThemeGeneratorJSONModal';
import { ThemeGeneratorPaletteModal } from './ThemeGeneratorPaletteModal';
import { ThemeGeneratorPreview } from './ThemeGeneratorPreview';
import { ThemeGeneratorSwitchThemeModal } from './ThemeGeneratorSwitchThemeModal';
import { ThemeGeneratorTreeView } from './ThemeGeneratorTreeView';
import styles from './themeGenerator.module.css';

/* Live theme generator (ported from Storybook): edit the theme tokens on the
   left, preview every component's ThemeGenerator story on the right. Unlike
   the original (inline style on an in-document div), the preview renders in a
   DemoFrame with hot token overrides — the plumbing built for it: portals
   stay themed and the docs dark skin never bleeds into the preview. */

const ThemeGenerator = (): JSX.Element => {
  const [fullscreen, setFullscreen] = useState(false);
  // Side-by-side panes need width: narrow viewports start stacked instead.
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>(() => window.matchMedia('(max-width: 1000px)').matches ? 'vertical' : 'horizontal');
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [editedVariables, setEditedVariables] = useState<Record<string, string>>({});
  const [debouncedVariables, setDebouncedVariables] = useState<Record<string, string>>({});
  const [isCustomTheme, setIsCustomTheme] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [isJsonOpen, setIsJsonOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const rootTokens = useMemo(() => resolveTokenValues(lightThemeTokens.root), []);

  useEffect(() => {
    if (selectedTheme === 'custom') {
      setIsCustomTheme(true);
      return;
    }
    setEditedVariables(rootTokens);
    setDebouncedVariables(rootTokens);
    setIsCustomTheme(false);
  }, [selectedTheme, rootTokens]);

  // Typing in a color picker fires continuously: the preview only re-themes
  // after a 150ms settle.
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => setDebouncedVariables(editedVariables), 150);
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [editedVariables]);

  useEffect(() => {
    const onChange = (): void => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  function toggleFullscreen(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapRef.current?.requestFullscreen();
    }
  }

  function handleSwitchThemeConfirm(): void {
    if (pendingTheme) {
      setSelectedTheme(pendingTheme);
    }
    setPendingTheme(null);
    setIsConfirmOpen(false);
  }

  function handleSwitchThemeCancel(): void {
    setPendingTheme(null);
    setIsConfirmOpen(false);
  }

  function handlePaletteApply(variables: Record<string, string>): void {
    setEditedVariables((prev) => ({ ...prev, ...variables }));
    setSelectedTheme('custom');
    setIsCustomTheme(true);
  }

  function handleJsonReplace(next: Record<string, string>): void {
    setEditedVariables(next);
    setSelectedTheme('custom');
    setIsCustomTheme(true);
  }

  function handleThemeValueChange(details: SwitchValueChangeDetail): void {
    const next = details.value;
    if (isCustomTheme && next !== 'custom') {
      setPendingTheme(next);
      setIsConfirmOpen(true);
      return;
    }
    setSelectedTheme(next);
  }

  function onVariableChange(name: string, value: string): void {
    setEditedVariables((prev) => ({ ...prev, [name]: value }));
    if (!isCustomTheme) {
      setSelectedTheme('custom');
      setIsCustomTheme(true);
    }
  }

  return (
    <div className={ styles['theme-generator'] } ref={ wrapRef }>
      <div className={ styles['theme-generator__menu'] }>
        <div className={ styles['theme-generator__menu__side'] }>
          <Button
            onClick={ () => setIsJsonOpen(true) }
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronLeftUnderscore } /> JSON
          </Button>

          <Switch onValueChange={ handleThemeValueChange } value={ selectedTheme }>
            <SwitchItem value="default">Default</SwitchItem>
            <SwitchItem value="custom">Custom</SwitchItem>
          </Switch>

          <Button
            onClick={ () => setIsPaletteOpen(true) }
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.magicWand } /> Generate palette
          </Button>
        </div>

        <div className={ styles['theme-generator__menu__side'] }>
          <Button
            onClick={ () => setOrientation((o) => (o === 'horizontal' ? 'vertical' : 'horizontal')) }
            size={ BUTTON_SIZE.sm }
            title={ orientation === 'horizontal' ? 'Split vertically' : 'Split horizontally' }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ orientation === 'horizontal' ? ICON_NAME.splitVertical : ICON_NAME.splitHorizontal } /> Layout
          </Button>
          <Button onClick={ toggleFullscreen } size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ fullscreen ? ICON_NAME.shrink : ICON_NAME.resize } /> { fullscreen ? 'Exit' : 'Fullscreen' }
          </Button>
        </div>
      </div>

      <Splitter.Root
        className={ styles['theme-generator__container'] }
        defaultSize={ [35, 65] }
        orientation={ orientation }
        panels={ [{ id: 'tree-view', minSize: 15 }, { id: 'preview', minSize: 15 }] }>
        <Splitter.Panel id="tree-view" style={{ overflow: 'auto' }}>
          <ThemeGeneratorTreeView
            onVariableChange={ onVariableChange }
            variables={ editedVariables } />
        </Splitter.Panel>

        <Splitter.ResizeTrigger aria-label="Resize" asChild id="tree-view:preview">
          <Button
            className={ `${styles['theme-generator__container__resize']} ${styles[`theme-generator__container__resize--${orientation}`]}` }
            color={ BUTTON_COLOR.neutral } />
        </Splitter.ResizeTrigger>

        <Splitter.Panel id="preview" style={{ overflow: 'auto' }}>
          <DemoFrame bare tokens={ debouncedVariables }>
            <ThemeGeneratorPreview />
          </DemoFrame>
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
  );
};

export { ThemeGenerator };

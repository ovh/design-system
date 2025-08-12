import React, { useEffect, useState } from 'react';
import { Button, Input, Text, TEXT_PRESET, Switch, SwitchItem, Icon, ICON_NAME } from '@ovhcloud/ods-react';
import { Splitter } from '@ark-ui/react/splitter';
import { OVERRIDES_STORAGE_KEY } from '../constants/themeConstants';
import { applyOverrides, clearOverrides } from '../utils/overrides';
import { getBaseThemeTokens } from '../utils/tokensLoader';
import { filterColorTokens } from '../utils/cssVars';
import { ThemePreviewGallery } from '../themePreviewComponents/ThemePreviewGallery';
import { ThemeSwitch } from '../themeSwitch/ThemeSwitch';
import { ThemeName } from '../utils/tokensLoader';
import { CUSTOM_BASE_THEME_STORAGE_KEY } from '../constants/themeConstants';
import defaultThemeUrl from '@ovhcloud/ods-themes/default?url';
import testThemeUrl from '@ovhcloud/ods-themes/test?url';

interface TokenEntry {
  name: string;
  value: string;
}

function normalizeColorForPicker(value: string): string | null {
  try {
    const el = document.createElement('input');
    el.type = 'color';
    el.value = value;
    return el.validity.valid ? el.value.substring(0, 7) : null;
  } catch {
    return null;
  }
}

const ThemeEditor: React.FC = () => {
  const [tokens, setTokens] = useState<TokenEntry[]>([]);
  const [layout, setLayout] = useState<'row' | 'column'>('row');
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('default');
  // Local-only theme selection
  const currentTheme: ThemeName = selectedTheme;
  const setTheme = (t: ThemeName) => setSelectedTheme(t);
  const [baseForCustom, setBaseForCustom] = useState<'default' | 'test'>('default');

  function ensureLocalThemeLink(): HTMLLinkElement {
    const LINK_ID = 'ods-local-theme-link';
    let link = document.getElementById(LINK_ID) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.id = LINK_ID;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      document.head.appendChild(link);
    }
    return link;
  }

  function setLocalThemeHref(theme: 'default' | 'test') {
    const href = theme === 'test' ? testThemeUrl : defaultThemeUrl;
    const link = ensureLocalThemeLink();
    // Force reload even if same href
    if (link.href !== href) {
      link.href = href;
    } else {
      link.href = '';
      setTimeout(() => { link.href = href; }, 0);
    }
  }

  function readOverridesFromStorage(): Record<string, string> | null {
    try {
      const raw = window.localStorage.getItem(OVERRIDES_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Record<string, string>) : null;
    } catch {
      return null;
    }
  }

  function computeEditorTokens(theme: ThemeName, customBase: 'default' | 'test'): TokenEntry[] {
    const baseTokens = getBaseThemeTokens(theme === 'custom' ? customBase : theme);
    const filtered = filterColorTokens(baseTokens);
    if (theme !== 'custom') return filtered;
    const saved = readOverridesFromStorage();
    if (!saved) return filtered;
    return filtered.map((t) => (saved[t.name] ? { ...t, value: saved[t.name] } : t));
  }

  useEffect(() => {
    setSelectedTheme(currentTheme);
    try {
      if (currentTheme === 'custom') {
        const savedBase = window.localStorage.getItem(CUSTOM_BASE_THEME_STORAGE_KEY) as 'default' | 'test' | null;
        setBaseForCustom(savedBase === 'test' ? 'test' : 'default');
      } else {
        setBaseForCustom(currentTheme === 'test' ? 'test' : 'default');
      }
    } catch {
      setBaseForCustom('default');
    }

    const nextTokens = computeEditorTokens(currentTheme, currentTheme === 'custom' ? (window.localStorage.getItem(CUSTOM_BASE_THEME_STORAGE_KEY) as 'default' | 'test') || 'default' : (currentTheme as 'default' | 'test'));
    setTokens(nextTokens);
    const saved = readOverridesFromStorage();
    if (saved) {
      applyOverrides(saved);
    } else {
      clearOverrides();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThemeSelect = (value: ThemeName) => {
    setSelectedTheme(value);
    if (value === 'custom') {
      setTokens(computeEditorTokens('custom', baseForCustom));
    } else {
      setBaseForCustom(value);
      setTokens(computeEditorTokens(value, baseForCustom));
    }
  };

  const handleChange = (name: string, value: string) => {
    setTokens((prev) => prev.map((t) => (t.name === name ? { ...t, value } : t)));
  };

  const handleApply = () => {
    try {
      if (selectedTheme === 'custom') {
        try {
          window.localStorage.setItem(CUSTOM_BASE_THEME_STORAGE_KEY, baseForCustom);
        } catch {}
        setLocalThemeHref(baseForCustom);
        setTheme('custom');
        const overrides: Record<string, string> = {};
        for (const t of tokens) {
          overrides[t.name] = t.value;
        }
        applyOverrides(overrides);
        window.localStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
      } else {
        setLocalThemeHref(selectedTheme);
        setTheme(selectedTheme);
        try { window.localStorage.removeItem(OVERRIDES_STORAGE_KEY); } catch {}
        clearOverrides();
      }
    } catch {
      // ignore storage errors
    }
  };

  const handleReset = () => {
    try {
      window.localStorage.removeItem(OVERRIDES_STORAGE_KEY);
    } catch {}
    clearOverrides();
    const base = currentTheme === 'custom' ? baseForCustom : (currentTheme as 'default' | 'test');
    setTokens(computeEditorTokens(base as ThemeName, baseForCustom));
  };

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <ThemeSwitch value={ selectedTheme } onChange={ handleThemeSelect } />
          <Button size="xs" variant="outline" onClick={ handleReset }>Reset</Button>
          <Button size="xs" onClick={ handleApply }>Apply</Button>
        </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Switch aria-label="Layout" value={ layout } onValueChange={ ({ value }) => setLayout(value as 'row' | 'column') }>
              <SwitchItem value="row" aria-label="Row">
                <span style={{ display: 'inline-block' }}>
                  <Icon name={ ICON_NAME.columns } />
                </span>
              </SwitchItem>
              <SwitchItem value="column" aria-label="Column">
                <span style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>
                  <Icon name={ ICON_NAME.columns } />
                </span>
              </SwitchItem>
            </Switch>
          </div>
      </div>
      <Splitter.Root
        orientation={ layout === 'row' ? 'horizontal' : 'vertical' }
        panels={[
          { id: 'editor', minSize: 25 },
          { id: 'preview', minSize: 25 },
        ]}
        style={{ height: 600, minHeight: 420 }}>
        <Splitter.Panel id="editor">
          <div style={{ display: 'grid', gap: 12, paddingRight: 12 }}>
            <Text preset={ TEXT_PRESET.heading3 }>Color variables</Text>
            <div style={{ maxHeight: 540, overflow: 'auto', paddingRight: 8 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '8px 6px' }}>Token</th>
                    <th style={{ textAlign: 'left', padding: '8px 6px' }}>Color</th>
                    <th style={{ textAlign: 'left', padding: '8px 6px' }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tokens.map((token) => {
                    const normalized = normalizeColorForPicker(token.value);
                    const colorValue = normalized ?? '#000000';
                    return (
                      <tr key={ token.name }>
                        <td style={{ padding: '6px', verticalAlign: 'middle' }}>
                          <Text preset={ TEXT_PRESET.span }>{ token.name }</Text>
                        </td>
                        <td style={{ padding: '6px', verticalAlign: 'middle' }}>
                          <input
                            aria-label={`Pick ${token.name}`}
                            type="color"
                            value={ colorValue }
                            onChange={ (e) => handleChange(token.name, e.target.value) }
                            style={{ width: 28, height: 24, border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }} />
                        </td>
                        <td style={{ padding: '6px', minWidth: 240 }}>
                          <Input
                            value={ token.value }
                            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(token.name, e.target.value) }
                            aria-label={`Set ${token.name}`}
                            invalid={ normalized === null } />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Splitter.Panel>
        <Splitter.ResizeTrigger
          id="editor:preview"
          style={ layout === 'row'
            ? { border: 'none', borderRadius: 20, height: '80%', marginTop: 'auto', marginBottom: 'auto', padding: 2 }
            : { border: 'none', borderRadius: 20, width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: 2, height: 4 } } />
        <Splitter.Panel id="preview">
          <div style={ layout === 'row' ? { paddingLeft: 12 } : { paddingTop: 12 } }>
            <ThemePreviewGallery />
          </div>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
};

export { ThemeEditor };



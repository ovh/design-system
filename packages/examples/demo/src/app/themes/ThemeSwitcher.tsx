import { type ReactElement, useCallback, useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupItem,
  BUTTON_GROUP_SIZE,
  BUTTON_VARIANT,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerTrigger,
  DRAWER_POSITION,
  Icon,
  ICON_NAME,
  Quantity,
  QuantityControl,
  QuantityInput,
  Select,
  SelectContent,
  SelectControl,
  Text,
  TEXT_PRESET,
} from '@ovhcloud/ods-react';
import style from './theme-switcher.module.scss';

const THEMES = [
  { label: 'ODS Default', value: 'default' },
  { label: 'ODS Classic', value: 'ods-classic' },
];

function ThemeSwitcher(): ReactElement {
  const [theme, setTheme] = useState('default');
  const [isDark, setIsDark] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [paddingH, setPaddingH] = useState('8');
  const [paddingV, setPaddingV] = useState('8');

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    root.removeAttribute('data-ods-theme');
    if (theme !== 'default') {
      root.setAttribute('data-ods-theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    if (isDark) {
      root.setAttribute('data-ods-mode', 'dark');
    } else {
      root.removeAttribute('data-ods-mode');
    }
  }, [isDark]);

  useEffect(() => {
    const root = document.getElementById('root');
    document.documentElement.style.setProperty('--ods-theme-padding-horizontal', `${paddingH}px`);
    root?.style.setProperty('--ods-theme-padding-horizontal', `${paddingH}px`);
  }, [paddingH]);

  useEffect(() => {
    const root = document.getElementById('root');
    document.documentElement.style.setProperty('--ods-theme-padding-vertical', `${paddingV}px`);
    root?.style.setProperty('--ods-theme-padding-vertical', `${paddingV}px`);
  }, [paddingV]);

  const handleThemeChange = useCallback((detail: { value: string[] }) => {
    if (detail.value.length > 0) {
      setTheme(detail.value[0]);
    }
  }, []);

  const handleDrawerToggle = useCallback(({ open }: { open: boolean }) => {
    setIsDrawerOpen(open);
  }, []);

  const handlePaddingHChange = useCallback(({ value }: { value: string }) => {
    setPaddingH(value);
  }, []);

  const handlePaddingVChange = useCallback(({ value }: { value: string }) => {
    setPaddingV(value);
  }, []);

  return (
    <div className={ style['theme-switcher'] }>
      <Select
        defaultValue={ ['default'] }
        items={ THEMES }
        onValueChange={ handleThemeChange }>
        <SelectControl placeholder="Theme" />
        <SelectContent />
      </Select>

      <ButtonGroup
        size={ BUTTON_GROUP_SIZE.xs }
        value={ [isDark ? 'dark' : 'light'] }
        onValueChange={ ({ value }) => setIsDark(value.includes('dark')) }>
        <ButtonGroupItem value="light">
          <Icon name={ ICON_NAME.sun } />
        </ButtonGroupItem>
        <ButtonGroupItem value="dark">
          <Icon name={ ICON_NAME.moon } />
        </ButtonGroupItem>
      </ButtonGroup>

      <Drawer
        open={ isDrawerOpen }
        onOpenChange={ handleDrawerToggle }
        closeOnInteractOutside={ true }
        closeOnEscape={ true }>
        <DrawerTrigger asChild>
          <Button style={{ color: '#fff' }} variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.cog } />
          </Button>
        </DrawerTrigger>

        <DrawerContent position={ DRAWER_POSITION.right }>
          <DrawerBody className={ style['theme-switcher__drawer-body'] }>
            <Text preset={ TEXT_PRESET.heading5 }>Design Tokens</Text>

            <div className={ style['theme-switcher__field'] }>
              <Text preset={ TEXT_PRESET.label }>Padding horizontal</Text>
              <Quantity
                min={ 0 }
                max={ 32 }
                step={ 1 }
                value={ paddingH }
                onValueChange={ handlePaddingHChange }>
                <QuantityControl>
                  <QuantityInput />
                </QuantityControl>
              </Quantity>
            </div>

            <div className={ style['theme-switcher__field'] }>
              <Text preset={ TEXT_PRESET.label }>Padding vertical</Text>
              <Quantity
                min={ 0 }
                max={ 32 }
                step={ 1 }
                value={ paddingV }
                onValueChange={ handlePaddingVChange }>
                <QuantityControl>
                  <QuantityInput />
                </QuantityControl>
              </Quantity>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export { ThemeSwitcher };

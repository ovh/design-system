import { BUTTON_VARIANT, ICON_NAME, Button, Icon, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';
import { type API, addons, types } from '@storybook/manager-api';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { THEME, THEME_STORAGE_KEY } from '../../constants/theme';
import { localGet, localSave } from '../../helpers/storage';
import { dark, light } from '../../ods.theme';
import style from './themeSelector.module.css';

const ADDON_NAME = 'themeSelector';

const themeSelectorAddon = (api: API) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  addons.add(`${ADDON_NAME}/sidebar`, {
    type: types.experimental_SIDEBAR_TOP,
    render: () => {
      const [currentTheme, setCurrentTheme] = useState(localGet<string>(THEME_STORAGE_KEY) || THEME.system)

      useEffect(() => {
        localSave(THEME_STORAGE_KEY, currentTheme);
        api.setOptions({
          theme: (currentTheme === THEME.system && prefersDark) || currentTheme === THEME.dark ? dark : light,
        });
      }, [currentTheme]);

      return (
        <Menu>
          <MenuTrigger asChild>
            <Button
              className={ classNames({ [style['theme-selector__trigger--dark']]: currentTheme !== THEME.light }) }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.lightbulb } />
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuItem
              className={ style['theme-selector__content__option'] }
              onSelect={ () => setCurrentTheme(THEME.light) }
              value={ THEME.light }>
              <Icon name={ ICON_NAME.sun } /> Light theme
            </MenuItem>

            <MenuItem
              className={ style['theme-selector__content__option'] }
              onSelect={ () => setCurrentTheme(THEME.dark) }
              value={ THEME.dark }>
              <Icon name={ ICON_NAME.moon } /> Dark theme
            </MenuItem>

            <MenuItem
              className={ style['theme-selector__content__option'] }
              onSelect={ () => setCurrentTheme(THEME.system) }
              value={ THEME.system }>
              <Icon name={ ICON_NAME.cpu } /> Use system theme
            </MenuItem>
          </MenuContent>
        </Menu>
      );
    },
  });
};

export {
  ADDON_NAME,
  themeSelectorAddon,
};

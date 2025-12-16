import { BUTTON_SIZE, BUTTON_VARIANT, ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
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
      const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
        localSave(THEME_STORAGE_KEY, currentTheme);
        api.setOptions({
          theme: (currentTheme === THEME.system && prefersDark) || currentTheme === THEME.dark ? dark : light,
        });
      }, [currentTheme]);

      function selectTheme(theme: THEME): void {
        setCurrentTheme(theme);
        setIsOpen(false);
      }

      return (
        <Popover
          onOpenChange={ ({ open }) => setIsOpen(open) }
          open={ isOpen }>
          <PopoverTrigger asChild>
            <Button
              className={ classNames({ [style['theme-selector__trigger--dark']]: currentTheme !== THEME.light }) }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.lightbulb } />
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <div className={ style['theme-selector__content'] }>
              <Button
                className={ style['theme-selector__content__option'] }
                onClick={ () => selectTheme(THEME.light) }
                size={ BUTTON_SIZE.xs }
                variant={ BUTTON_VARIANT.ghost }>
                <Icon name={ ICON_NAME.sun } /> Light theme
              </Button>

              <Button
                className={ style['theme-selector__content__option'] }
                onClick={ () => selectTheme(THEME.dark) }
                size={ BUTTON_SIZE.xs }
                variant={ BUTTON_VARIANT.ghost }>
                <Icon name={ ICON_NAME.moon } /> Dark theme
              </Button>

              <Button
                className={ style['theme-selector__content__option'] }
                onClick={ () => selectTheme(THEME.system) }
                size={ BUTTON_SIZE.xs }
                variant={ BUTTON_VARIANT.ghost }>
                <Icon name={ ICON_NAME.cpu } /> Use system theme
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      );
    },
  });
};

export {
  ADDON_NAME,
  themeSelectorAddon,
};

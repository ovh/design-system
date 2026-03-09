import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Icon, Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';
import { addons, types, useStorybookState } from '@storybook/manager-api';
import React from 'react';
import versions from '../../../assets/ods-versions.json';
import style from './odsVersions.module.css';
import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import classNames from 'classnames';

const ADDON_NAME = 'odsVersions';
const BASE_URL = 'https://ovh.github.io/design-system';

const odsVersionsAddon = () => {
  addons.add(`${ADDON_NAME}/sidebar`, {
    type: types.experimental_SIDEBAR_TOP,
    render: () => {
      const { theme } = useStorybookState();

      return (
        <div className={ style['ods-versions'] }>
          <Menu>
            <MenuTrigger asChild>
              <Button
                className={ classNames({ [style['ods-versions__trigger--dark']]: theme.base == 'dark' }) }
                color={ BUTTON_COLOR.primary }
                variant={ BUTTON_VARIANT.ghost }>
                { versions[0] } <Icon name={ ICON_NAME.chevronDown } />
              </Button>
            </MenuTrigger>

            <MenuContent className={ style['ods-versions__content'] }>
              {
                (versions || []).map((version, idx) => (
                  <MenuItem
                    className={ style['ods-versions__content__option'] }
                    key={ idx }
                    onSelect={ () => window.open(`${BASE_URL}/v${version}`, '_blank') }
                    value={ version }>
                    { version }
                  </MenuItem>
                ))
              }
            </MenuContent>
          </Menu>
        </div>
      );
    }
  });
};

export {
  ADDON_NAME,
  odsVersionsAddon,
};

import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Icon, Link, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={ classNames({ [style['ods-versions__trigger--dark']]: theme.base == 'dark' }) }
                color={ BUTTON_COLOR.primary }
                variant={ BUTTON_VARIANT.ghost }>
                { versions[0] } <Icon name={ ICON_NAME.chevronDown } />
              </Button>
            </PopoverTrigger>

            <PopoverContent className={ style['ods-versions__content'] }>
                {
                  (versions || []).map((version, idx) => (
                    <Link
                      className={ style['ods-versions__content__link'] }
                      href={ `${BASE_URL}/v${version}` }
                      key={ idx }
                      target="_blank">
                      { version }
                    </Link>
                  ))
                }
            </PopoverContent>
          </Popover>
        </div>
      );
    }
  });
};

export {
  ADDON_NAME,
  odsVersionsAddon,
};

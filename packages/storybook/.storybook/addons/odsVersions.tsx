import { BUTTON_VARIANT, ICON_NAME, Button, Icon, Link, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
import { addons, types } from '@storybook/manager-api';
import React from 'react';
import versions from '../../assets/ods-versions.json';
import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';

const ADDON_NAME = 'odsVersions';
const BASE_URL = 'https://ovh.github.io/design-system';

const odsVersionsAddon = () => {
  addons.add(`${ADDON_NAME}/sidebar`, {
    type: types.experimental_SIDEBAR_TOP,
    render: () => {
      return (
        <div style={{ textAlign: 'center' }}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={ BUTTON_VARIANT.ghost }>
                { versions[0] } <Icon name={ ICON_NAME.chevronDown } />
              </Button>
            </PopoverTrigger>

            <PopoverContent style={{ maxHeight: '300px', overflowY: 'auto', zIndex: 1 }}>
                {
                  (versions || []).map((version, idx) => (
                    <Link key={ idx }
                          style={{ display: 'block', margin: '0 2rem' }}
                          href={ `${BASE_URL}/v${version}` }
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

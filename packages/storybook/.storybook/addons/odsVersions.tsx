import { addons, types } from '@storybook/manager-api';
import { ODS_BUTTON_ICON_ALIGNMENT, ODS_BUTTON_VARIANT, ODS_ICON_NAME } from '@ovhcloud/ods-components';
import { OdsButton, OdsLink, OdsPopover } from '@ovhcloud/ods-components/react';
import React from 'react';
import versions from '../../assets/ods-versions.json';
import '@ovhcloud/ods-themes/default';

const ADDON_NAME = 'odsVersions';
const BASE_URL = 'https://ovh.github.io/design-system';

const odsVersionsAddon = () => {
  addons.add(`${ADDON_NAME}/sidebar`, {
    type: types.experimental_SIDEBAR_TOP,
    render: () => {
      return (
        <div style={{ textAlign: 'center' }}>
          <OdsButton icon={ ODS_ICON_NAME.chevronDown }
                     iconAlignment={ ODS_BUTTON_ICON_ALIGNMENT.right }
                     id="ods-version-current"
                     label={ versions[0] }
                     variant={ ODS_BUTTON_VARIANT.ghost } />

          <OdsPopover style={{ maxHeight: '300px', overflowY: 'auto' }}
                      triggerId="ods-version-current">
            {
              (versions || []).map((version, idx) => (
                <OdsLink key={ idx }
                         style={{ display: 'block', padding: '0 2rem' }}
                         href={ `${BASE_URL}/v${version}` }
                         label={ version }
                         target="_blank" />
              ))
            }
          </OdsPopover>
        </div>
      )
    }
  });
};

export {
  ADDON_NAME,
  odsVersionsAddon,
};

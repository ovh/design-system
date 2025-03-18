import { ODS_BUTTON_VARIANT, ODS_ICON_NAME, OdsButton, OdsIcon, OdsLink, OdsPopoverRadixUI as OdsPopover, OdsPopoverContentRadixUI as OdsPopoverContent, OdsPopoverTriggerRadixUI as OdsPopoverTrigger } from '@ovhcloud/ods-react';
import { addons, types } from '@storybook/manager-api';
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
          <OdsPopover>
            {/* Example using OdsPopover based on BaseUI */}
            {/*<OdsPopoverTrigger render={ (props) => (*/}
            {/*  // @ts-ignore Generic issue*/}
            {/*  <OdsButton*/}
            {/*    variant={ ODS_BUTTON_VARIANT.ghost }*/}
            {/*    { ...props }>*/}
            {/*    { versions[0] } <OdsIcon name={ ODS_ICON_NAME.chevronDown } />*/}
            {/*  </OdsButton>*/}
            {/*)} />*/}

            {/* Example using OdsPopover based on ArkUI / RadixUI */}
            <OdsPopoverTrigger asChild>
              <OdsButton variant={ ODS_BUTTON_VARIANT.ghost }>
                { versions[0] } <OdsIcon name={ ODS_ICON_NAME.chevronDown } />
              </OdsButton>
            </OdsPopoverTrigger>

            <OdsPopoverContent style={{ maxHeight: '300px', overflowY: 'auto', zIndex: 1 }}>
                {
                  (versions || []).map((version, idx) => (
                    <OdsLink key={ idx }
                             style={{ display: 'block', margin: '0 2rem' }}
                             href={ `${BASE_URL}/v${version}` }
                             target="_blank">
                      { version }
                    </OdsLink>
                  ))
                }
            </OdsPopoverContent>
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

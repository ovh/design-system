import { useOf } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import { navigate } from '@storybook/addon-links';
import { OdsButton, OdsLink } from '@ovhcloud/ods-components-react';
import { ODS_BUTTON_VARIANT, ODS_ICON_NAME } from '@ovhcloud/ods-components';
import { BASE_URL, LINK_ID } from './zeroheight';
import React from 'react';

export const DocNavigator = ({ of, children }: { of: ModuleExports, children: React.ReactNode }) => {
  const resolvedOf = useOf(of || 'story', ['meta']);
  const demoStoryKeys = Object.keys(resolvedOf.csfFile.stories || {}).filter(storyKey => storyKey.includes('--demo'));

  const extractLinkId = (storyId: string): string | null => {
    for (const id of Object.values(LINK_ID)) {
      const idPart = id.split('-');
      const componentPart = idPart.slice(1).join('-');
      if (storyId.includes(componentPart)) {
        return id;
      }
    }
    return null;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        {demoStoryKeys.map((storyId, index) => (
          <OdsButton
            key={index}
            label='Go to Demo'
            variant={ODS_BUTTON_VARIANT.default}
            onClick={() => {
              navigate({ storyId })
            }}
          >
          </OdsButton>
        ))}
      </div>
      <div style={{ marginLeft: '20px' }}>
        <OdsLink
          label='Go to functional specification'
          icon={ODS_ICON_NAME.externalLink}
          onClick={() => {
            const storyId = demoStoryKeys[0];
            const linkId = extractLinkId(storyId);

            if (linkId) {
              const externalLink = `${BASE_URL}${linkId}/b/40a887`;
              window.open(externalLink);
            } else {
              console.error('No Zeroheight link id matching storyId', storyId);
            }
          }}
        />
      </div>
      {children}
    </div>
  )
}

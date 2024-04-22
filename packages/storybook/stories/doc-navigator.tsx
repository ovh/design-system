import { useOf } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import { navigate } from '@storybook/addon-links';
import { OdsButton, OdsLink } from '@ovhcloud/ods-components-react';
import { ODS_BUTTON_VARIANT, ODS_ICON_NAME } from '@ovhcloud/ods-components';
import React, { useEffect, useState } from 'react';
import { BASE_URL, LINK_ID } from './zeroheight';

function extractLinkId(storyId: string): string | null {
  const storyComponentName = storyId.split('--').shift()?.split('-').pop() || '';

  for (const id of Object.values(LINK_ID)) {
    const idPart = id.split('-');
    const componentPart = idPart.slice(1).join('-');

    if (storyComponentName === componentPart) {
      return id;
    }
  }
  return null;
}

const DocNavigator = ({ of }: { of: ModuleExports }) => {
  const resolvedOf = useOf(of || 'story', ['meta']);
  const [href, setHref] = useState('');
  const [storyId, setStoryId] = useState('');

  useEffect(() => {
    const demoStoryKeys = Object.keys(resolvedOf.csfFile.stories || {}).filter((storyKey) => storyKey.includes('--demo'));
    const storyId = demoStoryKeys[0];
    const linkId = extractLinkId(storyId);

    setStoryId(storyId);

    if (linkId) {
      setHref(`${BASE_URL}${linkId}/b/40a887`);
    } else {
      console.error('No Zeroheight link id matching storyId', storyId);
    }
  }, [extractLinkId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '20px' }}>
      <OdsButton
        label="Go to Demo"
        onClick={ () => navigate({ storyId }) }
        variant={ ODS_BUTTON_VARIANT.default } />

      <OdsLink
        href={ href }
        icon={ ODS_ICON_NAME.externalLink }
        label="Go to functional specification"
        target="_blank" />
    </div>
  )
};

export {
  DocNavigator,
};

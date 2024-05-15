import { useOf } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import { navigate } from '@storybook/addon-links';
import { OdsButton, OdsLink } from '@ovhcloud/ods-components-react';
import { ODS_BUTTON_VARIANT, ODS_ICON_NAME } from '@ovhcloud/ods-components';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from './zeroheight';

const DocNavigator = ({ of, linkId }: { of: ModuleExports, linkId: string }) => {
  const resolvedOf = useOf(of || 'story', ['meta']);
  const [href, setHref] = useState('');
  const [storyId, setStoryId] = useState('');

  useEffect(() => {
    const demoStoryKeys = Object.keys(resolvedOf.csfFile.stories || {}).filter((storyKey) => storyKey.includes('--demo'));
    const storyId = demoStoryKeys[0];

    setStoryId(storyId);

    if (linkId) {
      setHref(`${BASE_URL}${linkId}/b/40a887`);
    } else {
      console.error('No Zeroheight link id provided.');
    }
  }, [linkId]);

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

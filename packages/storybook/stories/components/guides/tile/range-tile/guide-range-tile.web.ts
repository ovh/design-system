import { defineCustomElements as contentAddonCustomElements } from '@ovhcloud/ods-components/content-addon/loader';
import { defineCustomElements as inputCustomElements } from '@ovhcloud/ods-components/input/loader';
import { defineCustomElements as radioCustomElements } from '@ovhcloud/ods-components/radio/loader';
import { defineCustomElements as rangeCustomElements } from '@ovhcloud/ods-components/range/loader';
import { defineCustomElements as textCustomElements } from '@ovhcloud/ods-components/text/loader';
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-components/tile/loader';

import { RadioGroupPlay, RadioGroupTemplate, radioGroupArgs } from './guide-range-tile.web.group';
import { TilePlay, TileTemplate, tileArgs } from './guide-range-tile.web.tile';

tileCustomElements();
radioCustomElements();
rangeCustomElements();
inputCustomElements();
textCustomElements();
contentAddonCustomElements();

/* story parameters  */
export const storyParams = {
  style: `
  .range-tile__tile {
    align-items: center;
  }

  .range-tile__tile__range {
    display: flex;
    width: 100%;
  }

  .range-tile__input {
    --ods-input-text-align: center;
    margin: 0 var(--ods-size-06);
    width: 3rem;
  }

  .radio-container {
    margin-bottom: var(--ods-size-06);
    display: block;
  }

  .error-msg {
    display: none;
  }
  `,
};


// story with only a radio
export const RangeTileStory = TileTemplate.bind({});
// @ts-ignore
RangeTileStory.args = {
  ...storyParams,
  ...tileArgs,
};
// @ts-ignore
RangeTileStory.play = TilePlay;


// story with a radio group
export const RangeTileGroupStory = RadioGroupTemplate.bind({});
// @ts-ignore
RangeTileGroupStory.args = {
  ...storyParams,
  ...radioGroupArgs,
};
// @ts-ignore
RangeTileGroupStory.play = RadioGroupPlay;

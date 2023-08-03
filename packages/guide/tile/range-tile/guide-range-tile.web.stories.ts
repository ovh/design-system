// TODO fix those import
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-component-tile/loader';
import { defineCustomElements as radioCustomElements } from '@ovhcloud/ods-stencil-radio/loader';
import { defineCustomElements as rangeCustomElements } from '@ovhcloud/ods-stencil-range/loader';
import { defineCustomElements as inputCustomElements } from '@ovhcloud/ods-stencil-input/loader';
import { defineCustomElements as textCustomElements } from '@ovhcloud/ods-component-text/loader';
import { defineCustomElements as contentAddonCustomElements } from '@ovhcloud/ods-stencil-content-addon/loader';
import { radioGroupArgs, RadioGroupPlay, RadioGroupTemplate } from './guide-range-tile.web.stories.group';
import { tileArgs, TilePlay, TileTemplate } from './guide-range-tile.web.stories.tile';

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
  `
};


// story with only a radio
export const RangeTileStory = TileTemplate.bind({});
RangeTileStory.args = {
  ...storyParams,
  ...tileArgs
};
RangeTileStory.play = TilePlay;


// story with a radio group
export const RangeTileGroupStory = RadioGroupTemplate.bind({});
RangeTileGroupStory.args = {
  ...storyParams,
  ...radioGroupArgs
};
RangeTileGroupStory.play = RadioGroupPlay;

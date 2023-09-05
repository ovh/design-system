import { storyParams, RangeTileStory, RangeTileGroupStory } from './guide-range-tile.web';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';
import page from './range-tile.web.stories.page.mdx';

export default {
  title: 'Code/Stencil/Guides/Tiles/range',
  parameters: {
    docs: { page },
  },
};

RangeTileStory.args = {
  ...RangeTileStory.args,
  ...extractStoryParams(storyParams),
};

RangeTileGroupStory.args = {
  ...RangeTileGroupStory.args,
  ...extractStoryParams(storyParams),
};

RangeTileStory.argTypes = extractArgTypes(storyParams);
RangeTileGroupStory.argTypes = extractArgTypes(storyParams);

export const WebRangeTile = RangeTileStory;
export const WebRangeTileGroup = RangeTileGroupStory;


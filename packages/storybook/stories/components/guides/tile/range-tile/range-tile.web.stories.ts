import { RangeTileGroupStory, RangeTileStory, storyParams } from './guide-range-tile.web';
import page from './range-tile.web.stories.page.mdx';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';

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


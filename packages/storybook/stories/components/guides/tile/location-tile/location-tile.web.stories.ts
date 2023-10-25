import { LocationTileStory, storyParams } from './guide-location-tile.web';
import page from './location-tile.web.stories.page.mdx';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';

export default {
  title: 'Code/Stencil/Guides/Tiles/Location',
  parameters: {
    docs: { page },
  },
};

LocationTileStory.args = {
  ...LocationTileStory.args,
  ...extractStoryParams(storyParams),
};
LocationTileStory.argTypes = extractArgTypes(storyParams);

export const Web = LocationTileStory;


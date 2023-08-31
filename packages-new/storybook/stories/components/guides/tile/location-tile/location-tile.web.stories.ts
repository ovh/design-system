import { storyParams, LocationTileStory } from './guide-location-tile.web';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';
import page from './location-tile.web.stories.page.mdx';

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


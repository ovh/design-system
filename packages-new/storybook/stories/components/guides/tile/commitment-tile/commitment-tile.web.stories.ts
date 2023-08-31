import { storyParams, CommitmentTileStory } from './guide-commitment-tile.web';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';
import page from './commitment-tile.web.stories.page.mdx';

export default {
  title: 'Code/Stencil/Guides/Tiles/commitment',
  parameters: {
    docs: { page },
  },
};

CommitmentTileStory.args = {
  ...CommitmentTileStory.args,
  ...extractStoryParams(storyParams),
};
CommitmentTileStory.argTypes = extractArgTypes(storyParams);

export const Web = CommitmentTileStory;


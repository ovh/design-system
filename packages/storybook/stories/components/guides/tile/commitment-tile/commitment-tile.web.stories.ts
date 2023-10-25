import page from './commitment-tile.web.stories.page.mdx';
import { CommitmentTileStory, storyParams } from './guide-commitment-tile.web';
import { extractArgTypes, extractStoryParams } from '../../../../../core/componentHTMLUtils';

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


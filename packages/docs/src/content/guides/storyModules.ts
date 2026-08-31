import { type StoriesLoader, storiesOf } from '../../nav/model';

/* Story modules embedded by guide pages via <Canvas from="<component>" />.
   Keyed by guide id, then by component. Only the components a guide actually
   demos are wired here; the modules resolve through the same lazy glob as the
   component pages, so none of them ships in the entry chunk. */
const GUIDE_STORY_MODULES: Record<string, Record<string, StoriesLoader | undefined>> = {
  accessibility: {
    button: storiesOf('components/button'),
    icon: storiesOf('components/icon'),
    modal: storiesOf('components/modal'),
    skeleton: storiesOf('components/skeleton'),
  },
  forms: {
    'form-field': storiesOf('components/form-field'),
  },
};

export { GUIDE_STORY_MODULES };

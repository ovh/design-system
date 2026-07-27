import * as ButtonStories from '../../../../storybook/stories/components/button/button.stories';
import ButtonRaw from '../../../../storybook/stories/components/button/button.stories.tsx?raw';
import * as FormFieldStories from '../../../../storybook/stories/components/form-field/form-field.stories';
import FormFieldRaw from '../../../../storybook/stories/components/form-field/form-field.stories.tsx?raw';
import * as IconStories from '../../../../storybook/stories/components/icon/icon.stories';
import IconRaw from '../../../../storybook/stories/components/icon/icon.stories.tsx?raw';
import * as ModalStories from '../../../../storybook/stories/components/modal/modal.stories';
import ModalRaw from '../../../../storybook/stories/components/modal/modal.stories.tsx?raw';
import * as SkeletonStories from '../../../../storybook/stories/components/skeleton/skeleton.stories';
import SkeletonRaw from '../../../../storybook/stories/components/skeleton/skeleton.stories.tsx?raw';
import { type StoryModule } from '../../doc/PageStories';

/* Story modules embedded by guide pages via <Canvas from="<component>" />.
   Keyed by guide id, then by component. Only the components a guide actually
   demos are wired here — nothing loads the full component set. */
const GUIDE_STORY_MODULES: Record<string, Record<string, StoryModule>> = {
  accessibility: {
    button: { module: ButtonStories, raw: ButtonRaw },
    icon: { module: IconStories, raw: IconRaw },
    modal: { module: ModalStories, raw: ModalRaw },
    skeleton: { module: SkeletonStories, raw: SkeletonRaw },
  },
  forms: {
    'form-field': { module: FormFieldStories, raw: FormFieldRaw },
  },
};

export { GUIDE_STORY_MODULES };

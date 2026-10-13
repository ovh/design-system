import { composeStories } from '@storybook/react';
import { Component, type ComponentType, type ReactNode } from 'react';

/* Every component's ThemeGenerator story - the static, portal-free fixture each component already
   ships for the theme generator, and the only set that covers all 58 of them exhaustively (every
   size x variant x colour x state). Globbed rather than listed: a new component is picked up by
   adding its story file, nothing here. */
const STORY_MODULES = import.meta.glob('../../../stories/components/*/*.stories.tsx', { eager: true }) as Record<string, Record<string, unknown>>;

const humanize = (id: string): string => id.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

interface GalleryEntry {
  Story: ComponentType;
  id: string;
  title: string;
}

const GALLERY: GalleryEntry[] = Object.entries(STORY_MODULES)
  .flatMap(([path, module]) => {
    const segments = path.split('/');
    const id = segments[segments.length - 2] ?? path;
    const composed = composeStories(module as Parameters<typeof composeStories>[0]) as Record<string, ComponentType>;
    return composed.ThemeGenerator ? [{ Story: composed.ThemeGenerator, id, title: humanize(id) }] : [];
  })
  .sort((a, b) => a.title.localeCompare(b.title));

/* One fixture throwing must not take the other 57 down with it: the page's whole point is to be
   looked at as a whole. */
class FixtureBoundary extends Component<{ children: ReactNode, title: string }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  render(): ReactNode {
    if (this.state.failed) {
      return <p className="lab__fixture-error">{ this.props.title } failed to render.</p>;
    }
    return this.props.children;
  }
}

const ComponentGallery = ({ filter }: { filter: string }): ReactNode => {
  const needle = filter.trim().toLowerCase();
  const shown = needle ? GALLERY.filter((entry) => entry.id.includes(needle) || entry.title.toLowerCase().includes(needle)) : GALLERY;

  if (!shown.length) {
    return <p className="lab__empty">No component matches “{ filter }”.</p>;
  }

  return (
    <>
      { shown.map(({ Story, id, title }) => (
        <section className="lab__card" id={ `component-${id}` } key={ id }>
          <h3 className="lab__card-title">{ title }</h3>

          <div className="lab__card-body">
            <FixtureBoundary title={ title }>
              <Story />
            </FixtureBoundary>
          </div>
        </section>
      )) }
    </>
  );
};

export { ComponentGallery, GALLERY };

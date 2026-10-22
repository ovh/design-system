import { composeStories } from '@storybook/react';
import { Component, type ComponentType, type JSX, type ReactNode, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DemoFrame } from '../demo/DemoFrame';
import { flattenPages } from '../nav/model';
import { INPUT_TYPE, Input } from '../ods';
import styles from './componentGallery.module.css';

const STORY_MODULES = import.meta.glob('../../stories/components/*/*.stories.tsx', { eager: true }) as Record<string, Record<string, unknown>>;

/* ThemeGenerator is each component's size x variant x color x state fixture. The others fill what
   some fixtures leave out: the Tabs and Table variants, Divider orientation, Logo sizes, the
   invalid Checkbox... */
const VARIATION_STORIES = ['ThemeGenerator', 'Variant', 'Color', 'Size', 'Sizes', 'Orientation', 'Types', 'States', 'Disabled', 'Readonly', 'ReadOnly', 'Invalid', 'Loading', 'Error', 'Selected'];

interface GalleryStory {
  Story: ComponentType;
  name: string;
}

interface GalleryEntry {
  key: string;
  path?: string;
  stories: GalleryStory[];
  title: string;
}

const humanize = (name: string): string => name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

const COMPONENT_PAGES = new Map(flattenPages().filter((page) => page.kind === 'component').map((page) => [page.id, page]));

const GALLERY: GalleryEntry[] = Object.entries(STORY_MODULES)
  .map(([path, module]) => {
    const segments = path.split('/');
    const key = segments[segments.length - 2] ?? path;
    const page = COMPONENT_PAGES.get(`components/${key}`);
    const composed = composeStories(module as Parameters<typeof composeStories>[0]) as Record<string, ComponentType>;

    return {
      key,
      path: page?.path,
      stories: VARIATION_STORIES.flatMap((name) => (composed[name] ? [{ Story: composed[name], name }] : [])),
      title: page?.title ?? key,
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

/* One story throwing must not blank the whole frame: the page is only useful seen as a whole. */
class StoryBoundary extends Component<{ children: ReactNode, label: string }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  render(): ReactNode {
    if (this.state.failed) {
      return <p className={ styles['component-gallery__error'] }>{ this.props.label } failed to render.</p>;
    }
    return this.props.children;
  }
}

const ComponentGallery = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  const needle = filter.trim().toLowerCase();
  const shown = needle
    ? GALLERY.filter((entry) => entry.key.includes(needle) || entry.title.toLowerCase().includes(needle))
    : GALLERY;

  return (
    <div className={ styles['component-gallery'] }>
      <div className={ styles['component-gallery__toolbar'] }>
        <Input
          aria-label="Filter components"
          className={ styles['component-gallery__filter'] }
          clearable
          onChange={ (event) => setFilter(event.target.value) }
          onClear={ () => setFilter('') }
          placeholder={ `Filter ${GALLERY.length} components` }
          type={ INPUT_TYPE.search }
          value={ filter } />

        <span className={ styles['component-gallery__count'] }>
          { shown.length } / { GALLERY.length }
        </span>
      </div>

      { shown.length ? (
        <DemoFrame>
          { shown.map(({ key, path, stories, title }) => (
            <section className={ styles['component-gallery__component'] } key={ key }>
              <header className={ styles['component-gallery__header'] }>
                <h2 className={ styles['component-gallery__title'] }>{ title }</h2>
                { path && <RouterLink className={ styles['component-gallery__doc-link'] } to={ path }>Documentation</RouterLink> }
              </header>

              { stories.map(({ Story, name }) => (
                <div className={ styles['component-gallery__story'] } key={ name }>
                  <h3 className={ styles['component-gallery__story-name'] }>{ humanize(name) }</h3>

                  <div className={ styles['component-gallery__story-demo'] }>
                    <StoryBoundary label={ `${title} / ${humanize(name)}` }>
                      <Story />
                    </StoryBoundary>
                  </div>
                </div>
              )) }
            </section>
          )) }
        </DemoFrame>
      ) : (
        <p className={ styles['component-gallery__empty'] }>No component matches “{ filter }”.</p>
      ) }
    </div>
  );
};

export { ComponentGallery };

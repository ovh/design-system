import { composeStories } from '@storybook/react';
import { Component, type ComponentType, type JSX, type ReactNode, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DemoFrame } from '../demo/DemoFrame';
import { flattenPages } from '../nav/model';
import { Card, Link } from '../ods';
import { GalleryToolbar } from './GalleryToolbar';
import styles from './componentGallery.module.css';

const STORY_MODULES = import.meta.glob('../../stories/components/*/*.stories.tsx', { eager: true }) as Record<string, Record<string, unknown>>;

/* The "big categories" the toolbar filters on. The nav model is a flat component list, so the
   grouping lives here; a component missing from it lands in "Other" instead of vanishing. */
const CATEGORIES: Record<string, string[]> = {
  'Actions': ['button', 'button-group', 'clipboard', 'link'],
  'Data display': ['accordion', 'avatar', 'card', 'cart', 'code', 'data-table', 'divider', 'file-thumbnail', 'icon', 'kbd', 'logo', 'markdown', 'medium', 'table', 'text', 'tile'],
  'Feedback & status': ['badge', 'message', 'message-bubble', 'meter', 'progress-bar', 'skeleton', 'spinner', 'tag'],
  'Form elements': ['checkbox', 'combobox', 'datepicker', 'editable', 'file-upload', 'form-field', 'input', 'password', 'phone-number', 'prompt-input', 'quantity', 'query-filter', 'radio-group', 'range', 'select', 'switch', 'textarea', 'timepicker', 'toggle'],
  'Navigation': ['breadcrumb', 'command', 'menu', 'pagination', 'tabs', 'tree-view'],
  'Overlays': ['drawer', 'modal', 'popover', 'toaster', 'tooltip'],
};
const OTHER_CATEGORY = 'Other';

const categoryOf = (key: string): string => Object.entries(CATEGORIES).find(([, keys]) => keys.includes(key))?.[0] ?? OTHER_CATEGORY;

interface GalleryEntry {
  category: string;
  key: string;
  path?: string;
  /* The component's Default story: its first impression, shown on the card. */
  Preview?: ComponentType;
  title: string;
}

const COMPONENT_PAGES = new Map(flattenPages().filter((page) => page.kind === 'component').map((page) => [page.id, page]));

const GALLERY: GalleryEntry[] = Object.entries(STORY_MODULES)
  .map(([path, module]) => {
    const segments = path.split('/');
    const key = segments[segments.length - 2] ?? path;
    const page = COMPONENT_PAGES.get(`components/${key}`);
    const composed = composeStories(module as Parameters<typeof composeStories>[0]) as Record<string, ComponentType>;

    return {
      category: categoryOf(key),
      key,
      path: page?.path,
      Preview: composed['Default'],
      title: page?.title ?? key,
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

const CATEGORY_ITEMS = [...new Set(GALLERY.map((entry) => entry.category))]
  .sort((a, b) => (a === OTHER_CATEGORY ? 1 : b === OTHER_CATEGORY ? -1 : a.localeCompare(b)))
  .map((category) => ({ label: category, value: category }));

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
  const [categories, setCategories] = useState<string[]>([]);
  const needle = filter.trim().toLowerCase();
  // No category selected means every category.
  const shown = GALLERY
    .filter((entry) => !categories.length || categories.includes(entry.category))
    .filter((entry) => !needle || entry.key.includes(needle) || entry.title.toLowerCase().includes(needle));

  return (
    <div className={ styles['component-gallery'] }>
      <GalleryToolbar
        categories={ categories }
        categoryItems={ CATEGORY_ITEMS }
        filter={ filter }
        noun="components"
        onCategoriesChange={ setCategories }
        onFilterChange={ setFilter }
        shown={ shown.length }
        total={ GALLERY.length } />

      { shown.length ? (
        <DemoFrame pageSurface title="Component previews">
          <ul className={ styles['component-gallery__grid'] }>
            { shown.map(({ Preview, key, path, title }) => (
              <li className={ styles['component-gallery__item'] } key={ key }>
                <Card className={ styles['component-gallery__card'] }>
                  <h2 className={ styles['component-gallery__title'] }>
                    { path ? <Link as={ RouterLink } to={ path }>{ title }</Link> : title }
                  </h2>

                  <div className={ styles['component-gallery__preview'] }>
                    { Preview && (
                      <StoryBoundary label={ `${title} / Default` }>
                        <Preview />
                      </StoryBoundary>
                    ) }
                  </div>
                </Card>
              </li>
            )) }
          </ul>
        </DemoFrame>
      ) : (
        <p className={ styles['component-gallery__empty'] }>No component matches “{ filter }”.</p>
      ) }
    </div>
  );
};

export { ComponentGallery };

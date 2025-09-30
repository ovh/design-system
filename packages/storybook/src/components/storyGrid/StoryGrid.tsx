import React, { type JSX } from 'react';
import styles from './storyGrid.module.css';

type StoryRef = {
  id: string,
  label?: string,
};

type ComponentStories = {
  kind: string,
  name: string,
  stories: StoryRef[],
};

type Props = {
  components: ComponentStories[],
};

function toTitleCase(text: string): string {
  return text
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getStoryLabel(story: StoryRef): string {
  if (story.label) {
    return story.label;
  }

  const parts = story.id.split('--');
  const suffix = parts.length > 1 ? parts[1] : story.id;
  return toTitleCase(suffix);
}

function StoryGrid({ components }: Props): JSX.Element {
  return (
    <div>
      {
        components.map((component) => (
          <section key={ component.name }>
            <h3>
              { component.name }
            </h3>

            <div className={ styles.grid__section__items }>
              {
                component.stories.map((story) => (
                  <div className="ods-custom-theme" key={ story.id }>
                    <div>
                      <iframe
                        allowFullScreen
                        loading="lazy"
                        src={ `iframe.html?id=${story.id}&viewMode=story` }
                        style={ { border: 0, width: '100%' } }
                        title={ `${component.name} - ${getStoryLabel(story)}` } />
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        ))
      }
    </div>
  );
}

export {
  StoryGrid,
};



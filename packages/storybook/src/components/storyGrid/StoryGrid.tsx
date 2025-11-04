import React, { type JSX, useEffect, useRef } from 'react';
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
  themeClass?: string,
  themeVariables?: Record<string, string>,
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

function StoryGrid({ components, themeClass, themeVariables }: Props): JSX.Element {
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const injectThemeIntoIframe = (iframe: HTMLIFrameElement) => {
    if (!iframe?.contentDocument || !iframe?.contentDocument?.head || !themeVariables || !themeClass) return;

    const styleId = 'theme-generator-variables';
    let styleElement = iframe.contentDocument.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = iframe.contentDocument.createElement('style');
      styleElement.id = styleId;
      iframe.contentDocument.head.appendChild(styleElement);
    }

    styleElement.textContent = `.${ themeClass } {\n${ Object.entries(themeVariables)
      .map(([key, value]) => `  ${ key }: ${ value };`)
      .join('\n') }\n}`;
    iframe.contentDocument.body.classList.add(themeClass);
  };

  useEffect(() => {
    iframeRefs.current.forEach((iframe) => {
      if (iframe) injectThemeIntoIframe(iframe);
    });
  }, [themeVariables, themeClass]);
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
                component.stories.map((story, storyIndex) => (
                  <div className={themeClass || "ods-custom-theme"} key={ story.id }>
                    <div>
                      <iframe
                        ref={(el) => {
                          const globalIndex = components.findIndex(c => c.name === component.name) * component.stories.length + storyIndex;
                          iframeRefs.current[globalIndex] = el;
                        }}
                        allowFullScreen
                        loading="lazy"
                        src={ `iframe.html?id=${story.id}&viewMode=story${themeClass ? `&globals=themeClass:${themeClass}` : ''}` }
                        style={ { border: 0, width: '100%' } }
                        title={ `${component.name} - ${getStoryLabel(story)}` }
                        onLoad={() => {
                          const globalIndex = components.findIndex(c => c.name === component.name) * component.stories.length + storyIndex;
                          const iframe = iframeRefs.current[globalIndex];
                          if (iframe) injectThemeIntoIframe(iframe);
                        }} />
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



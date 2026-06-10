import { CARD_COLOR, Card } from '@ovhcloud/ods-react';
import { type ModuleExport } from '@storybook/types';
import React from 'react';
import { Canvas } from '../canvas/Canvas';
import { STORY } from '../../constants/meta';
import { StorybookLink } from '../storybookLink/StorybookLink';
import styles from './gallery.module.css';

type Props = {
  components: {
    kind: string,
    name: string,
    story: ModuleExport
  }[],
}

const Gallery = ({ components }: Props) => {
  const galleryRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const content = galleryRef.current?.closest('.sbdocs-content') as HTMLElement | null;
    if (content) {
      content.style.maxWidth = 'initial';
    }
    return () => {
      if (content) {
        content.style.maxWidth = '';
      }
    };
  }, []);

  return (
    <div ref={ galleryRef } className={ styles.gallery }>
      {
        components.map((component, idx) => (
          <Card
            className={ styles['gallery__item'] }
            color={ CARD_COLOR.neutral }
            key={ idx }>
            <Canvas
              className={ styles['gallery__item__preview'] }
              of={ component.story }
              sourceState="none" />

            <StorybookLink
              className={ styles['gallery__item__title'] }
              kind={ component.kind }
              story={ STORY.documentation }>
              { component.name }
            </StorybookLink>
          </Card>
        ))
      }
    </div>
  );
};

export {
  Gallery,
};

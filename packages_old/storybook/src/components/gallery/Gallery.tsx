import { ODS_CARD_COLOR } from '@ovhcloud/ods-components';
import { OdsCard } from '@ovhcloud/ods-components/react';
import { type ModuleExport } from '@storybook/types';
import React from 'react';
import { STORY } from '../../constants/meta';
import { CanvasWithoutContext } from '../canvasWithoutContext/CanvasWithoutContext';
import { Heading } from '../heading/Heading';
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
  return (
    <div className={ styles.gallery }>
      <Heading label="UI Components"
               level={ 1 } />

      <div className={ styles['gallery__items'] }>
        {
          components.map((component, idx) => (
            <OdsCard className={ styles['gallery__items__item'] }
                     color={ ODS_CARD_COLOR.neutral }
                     key={ idx }>
              <CanvasWithoutContext className={ styles['gallery__items__item__preview'] }
                      of={ component.story } />

              <StorybookLink className={ styles['gallery__items__item__title'] }
                             kind={ component.kind }
                             label={ component.name }
                             story={ STORY.documentation } />
            </OdsCard>
          ))
        }
      </div>
    </div>
  );
};

export {
  Gallery,
};

import { CARD_COLOR, Card, Clipboard, ClipboardTrigger, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import React, { type FC, type JSX } from 'react';
import styles from './chartColorCards.module.css';
import { CHART_SERIES_COLORS } from '../../constants/chartColors';

const ChartColorCards: FC = (): JSX.Element => {
  return (
    <div className={ styles['chart-color-cards'] }>
      {
        CHART_SERIES_COLORS.map((color, index) => (
          <Card
            className={ styles['chart-color-cards__card'] }
            color={ CARD_COLOR.neutral }
            key={ color }>
            <Clipboard value={ color }>
              <ClipboardTrigger
                aria-label={ `Copy ${color}` }
                className={ styles['chart-color-cards__swatch'] }
                style={{ backgroundColor: color }} />
            </Clipboard>

            <div className={ styles['chart-color-cards__bottom'] }>
              <Text
                className={ styles['chart-color-cards__bottom__order'] }
                preset={ TEXT_PRESET.label }>
                { String(index + 1).padStart(2, '0') }
              </Text>

              <Text
                className={ styles['chart-color-cards__bottom__hex'] }
                preset={ TEXT_PRESET.span }>
                { color }
              </Text>
            </div>
          </Card>
        ))
      }
    </div>
  );
};

export {
  ChartColorCards,
};

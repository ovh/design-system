import { Card, ICON_NAME, Icon, Link, Medium, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import logoUrl from '../assets/product.png';
import style from './index.module.scss';

const MediaProductCard = (): JSX.Element => {
  return (
    <Card className={ style['media-product-card'] }>
      <div className={ style['media-product-card__body'] }>
        <Medium
          alt="AI Deploy logo"
          className={ style['media-product-card__body__logo'] }
          height={ 174 }
          src={ logoUrl }
          width={ 174 } />

        <div className={ style['media-product-card__body__content'] }>
          <span className={ style['media-product-card__body__content__title'] }>
            AI Deploy
          </span>

          <Text preset={ TEXT_PRESET.paragraph }>
            Easily deploy machine learning models and applications into production, create your API access points with ease, and make effective predictions.
          </Text>
        </div>
      </div>

      <div className={ style['media-product-card__footer'] }>
        <Link href="#">
          Discover AI Deploy <Icon name={ ICON_NAME.arrowRight } />
        </Link>
      </div>
    </Card>
  );
};

export {
  MediaProductCard,
};

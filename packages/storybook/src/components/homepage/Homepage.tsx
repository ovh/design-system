import { ICON_NAME, TEXT_PRESET, Icon, Link, Text } from '@ovhcloud/ods-react';
import React from 'react';
import { HOME_TITLE } from '../../constants/meta';
import { StorybookLink } from '../storybookLink/StorybookLink';
import styles from './homepage.module.css';
import imageFile from '../../../assets/ods_bg.png';

const Homepage = () => {
  return (
    <div className={ styles.homepage }
         style={{
           background: `url(${imageFile}) no-repeat center center fixed`,
           backgroundSize: 'cover',
         }}>
      <div className={ styles['homepage__content'] }>
        <img alt="OVHcloud logo"
             height="64"
             src="ods_logo.svg"
             width="640" />

        <Text preset={ TEXT_PRESET.heading3 }>
          A collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.
        </Text>

        <div className={ styles['homepage__content__links'] }>
          <StorybookLink title={ HOME_TITLE.getStarted }>
            Get Started <Icon name={ ICON_NAME.arrowRight } />
          </StorybookLink>

          <Link href="https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system"
                   target="_blank">
            <Icon name={ ICON_NAME.externalLink } /> Design Guidelines
          </Link>

          <Link href="https://github.com/ovh/design-system"
                   target="_blank">
            <Icon name={ ICON_NAME.externalLink } /> GitHub repository
          </Link>
        </div>
      </div>
    </div>
  );
};

export {
  Homepage,
};

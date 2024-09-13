import { ODS_ICON_NAME, ODS_TEXT_PRESET } from '@ovhcloud/ods-components';
import { OdsLink, OdsText } from '@ovhcloud/ods-components/react';
import React from 'react';
import { StorybookLink } from '../storybookLink/StorybookLink';
import styles from './homepage.module.css';

const Homepage = () => {
  return (
    <div className={ styles.homepage }>
      <div className={ styles['homepage__content'] }>
        <img alt="OVHcloud logo"
             height="64"
             src="ods_logo.svg"
             width="640" />

        <OdsText preset={ ODS_TEXT_PRESET.heading3 }>
          A collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.
        </OdsText>

        <div className={ styles['homepage__content__links'] }>
          <StorybookLink icon={ ODS_ICON_NAME.arrowRight }
                         label="Get Started"
                         title="OVHcloud Design System/Get Started" />

          <OdsLink href="https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system"
                   icon={ ODS_ICON_NAME.externalLink }
                   label="Design Guidelines"
                   target="_blank" />

          <OdsLink href="https://github.com/ovh/design-system"
                   icon={ ODS_ICON_NAME.externalLink }
                   label="GitHub repository"
                   target="_blank" />
        </div>
      </div>
    </div>
  );
};

export {
  Homepage,
};

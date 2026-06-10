import {
  ICON_NAME,
  Icon,
  TEXT_PRESET,
  Text,
} from '@ovhcloud/ods-react';
import React from 'react';
import { HOME_TITLE } from '../../constants/meta';
import { ExternalLink } from '../externalLink/ExternalLink';
import { StorybookLink } from '../storybookLink/StorybookLink';
import { Brand } from './Brand';
import styles from './homepage.module.css';

const Homepage = () => {
  return (
    <div className={ styles.homepage }>
      {/* Hero */}
      <div
        className={ styles['homepage__hero'] }>
        <Brand />

        <Text preset={ TEXT_PRESET.heading3 }>
          Your set of guidelines and UI components tailored for building consistent user experiences across OVHcloud products.
        </Text>

        <div className={ styles['homepage__hero__links'] }>
          <StorybookLink title={ HOME_TITLE.startHere }>
            Get Started <Icon name={ ICON_NAME.arrowRight } />
          </StorybookLink>
        </div>
      </div>

      {/* Key Stats */}
      <div className={ styles['homepage__section'] }>
        <div className={ styles['homepage__stats'] }>
          <p className={ styles['homepage__stats__card'] }>
            <Text preset={ TEXT_PRESET.heading2 } as="span">50+</Text>
            <Text as="span">Components</Text>
          </p>
          <p className={ styles['homepage__stats__card'] }>
            <Text preset={ TEXT_PRESET.heading2 } as="span">React</Text>
            <Text as="span">framework</Text>
          </p>
          <p className={ styles['homepage__stats__card'] }>
            <Text preset={ TEXT_PRESET.heading2 } as="span">
              Accessible
            </Text>
            <Text as="span">UI components</Text>
          </p>
          <p className={ styles['homepage__stats__card'] }>
            <Text preset={ TEXT_PRESET.heading2 } as="span">
              Themeable
            </Text>
            <Text as="span">and customizable at will</Text>
          </p>
        </div>
      </div>

      {/* Quick Paths */}
      <div className={ styles['homepage__section'] }>
        <Text className={ styles['homepage__section__title'] } preset={ TEXT_PRESET.heading4 }>
          Where do you want to go?
        </Text>

        <div className={ styles['homepage__quickpaths'] }>
          <div className={ styles['homepage__quickpaths__card'] }>
            <Text className={ styles['homepage__quickpaths__card__title'] }
                  preset={ TEXT_PRESET.heading4 }
                  as="span">
              <Icon name={ ICON_NAME.arrowRight } /> Get Started
            </Text>
            <Text className={ styles['homepage__quickpaths__card__body'] }>
              Install ODS and add your first component
            </Text>
            <StorybookLink title={ HOME_TITLE.startHere }>Get Started</StorybookLink>
          </div>
          <div className={ styles['homepage__quickpaths__card'] }>
            <Text className={ styles['homepage__quickpaths__card__title'] }
                  preset={ TEXT_PRESET.heading4 }
                  as="span">
              <Icon name={ ICON_NAME.magnifyingGlass } /> Browse Components
            </Text>
            <Text className={ styles['homepage__quickpaths__card__body'] }>
              Explore the full library of 60+ React components
            </Text>
            <StorybookLink title="React Components/Gallery">Component Gallery</StorybookLink>
          </div>
          <div className={ styles['homepage__quickpaths__card'] }>
            <Text className={ styles['homepage__quickpaths__card__title'] }
                  preset={ TEXT_PRESET.heading4 }
                  as="span">
              <Icon name={ ICON_NAME.arrowUp } /> Upgrading
            </Text>
            <Text className={ styles['homepage__quickpaths__card__body'] }>
              Migration guides and changelogs for existing users
            </Text>
            <StorybookLink title={ HOME_TITLE.migrationTo19 }>Migration to v19</StorybookLink>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className={ styles['homepage__external'] }>
        <ExternalLink href="https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system">
          Design Guidelines
        </ExternalLink>
        <ExternalLink href="https://github.com/ovh/design-system">
          GitHub
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/org/ovhcloud">
          npm
        </ExternalLink>
      </div>
    </div>
  );
};

export {
  Homepage,
};

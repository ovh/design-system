import { useNavigate } from 'react-router-dom';
import imageFile from '../../../../assets/ods_bg.png';
import { BASENAME } from '../../../appBase';
import { ExternalLink } from '../../DocComponents';
import { BADGE_COLOR, Badge, DIVIDER_SPACING, Divider, ICON_NAME, Icon, Link, TEXT_PRESET, Text } from '../../../ods';
import { Brand } from './Brand';
import { HomepageTile } from './HomepageTile';
import styles from './homepage.module.css';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div
      className={ styles.homepage }
      data-page="homepage"
      style={{ backgroundImage: `url(${imageFile})` }}>
      <div className={ styles['homepage__content'] }>
        <div className={ styles['homepage__heading'] }>
          <Brand />

          <ul className={ styles['homepage__features'] }>
            <li>
              <Badge color={ BADGE_COLOR.information }>
                <Icon name={ ICON_NAME.circleThreeNodes } />
                React-based
              </Badge>
            </li>
            <li>
              <Badge color={ BADGE_COLOR.information }>
                <Icon name={ ICON_NAME.accessibilityFull } />
                Fully accessible
              </Badge>
            </li>
            <li>
              <Badge color={ BADGE_COLOR.information }>
                <Icon name={ ICON_NAME.lockOpen } />
                Open source
              </Badge>
            </li>
          </ul>

          <Divider aria-hidden className={ styles['homepage__divider'] } spacing={ DIVIDER_SPACING._16 } />
        </div>

        <Text as="p" preset={ TEXT_PRESET.heading5 }>
          A collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.
        </Text>

        <div className={ styles['homepage__tiles'] }>
          <HomepageTile
            description="60+ production-ready React components."
            icon={ ICON_NAME.grid }
            linkLabel="Browse components"
            path="/components/button"
            title="Components" />

          <HomepageTile
            description="500+ icons crafted for OVHcloud products."
            icon={ ICON_NAME.sparkle }
            linkLabel="Browse icons"
            path="/components/icon"
            title="Icons" />

          <HomepageTile
            description="Proven UI patterns that combine multiple components."
            icon={ ICON_NAME.lightbulb }
            linkLabel="Browse recipes"
            path="/recipes/components"
            title="Recipes" />
        </div>

        <ul className={ styles['homepage__content__links'] }>
          <li>
            <Link
              href={ `${BASENAME}/guides/get-started` }
              onClick={ (event) => {
                event.preventDefault();
                navigate('/guides/get-started');
              } }>
              Get Started <Icon name={ ICON_NAME.chevronRight } />
            </Link>
          </li>
          <li>
            <ExternalLink href="https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system">
              Design Guidelines
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/ovh/design-system">
              <Icon name={ ICON_NAME.github } />
              GitHub repository
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export {
  Homepage,
};

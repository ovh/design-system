import {
  ICON_NAME,
  TEXT_PRESET,
  Icon,
  Text,
  Divider,
  DIVIDER_SPACING,
  Badge,
  Link,
  BADGE_COLOR,
} from "@ovhcloud/ods-react";
import { navigate } from "@storybook/addon-links";
import React from "react";
import { useStoryHref } from "../../helpers/useStoryHref";
import { HOME_TITLE, REACT_COMPONENTS_TITLE, RECIPES_TITLE } from "../../constants/meta";
import { ExternalLink } from "../externalLink/ExternalLink";
import styles from "./homepage.module.css";
import { Brand } from "./Brand";
import { HomepageTile } from "./HomepageTile";
import imageFile from "../../../assets/ods_bg.png";

const Homepage = () => {
  const getStartedHref = useStoryHref(HOME_TITLE.getStarted);

  return (
    <div className={styles.homepage} data-page="homepage" style={{ backgroundImage: `url(${imageFile})` }}>
      <div className={styles["homepage__content"]}>
        <div className={styles["homepage__heading"]}>
          <Brand />
          <ul className={styles["homepage__features"]}>
            <li>
              <Badge color={BADGE_COLOR.information}>
                <Icon name={ICON_NAME.circleThreeNodes} />
                <Text preset={TEXT_PRESET.label}>React-based</Text>
              </Badge>
            </li>
            <li>
              <Badge color={BADGE_COLOR.information}>
                <Icon name={ICON_NAME.accessibilityFull} />
                <Text preset={TEXT_PRESET.label}>Fully accessible</Text>
              </Badge>
            </li>
            <li>
              <Badge color={BADGE_COLOR.information}>
                <Icon name={ICON_NAME.lockOpen} />
                <Text preset={TEXT_PRESET.label}>Open source</Text>
              </Badge>
            </li>
          </ul>
          <Divider aria-hidden className={styles["homepage__divider"]} spacing={DIVIDER_SPACING._16} />
        </div>

        <Text as="p" preset={TEXT_PRESET.heading5}>
          A collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud
          products.
        </Text>

        <div className={styles["homepage__tiles"]}>
          <HomepageTile
            description="Browse 60+ production-ready React components."
            icon={ICON_NAME.grid}
            path={REACT_COMPONENTS_TITLE.gallery}
            title="Components"
          />
          <HomepageTile
            description="500+ icons crafted for OVHcloud products."
            icon={ICON_NAME.sparkle}
            name="Gallery"
            path={REACT_COMPONENTS_TITLE.icon}
            title="Icons"
          />
          <HomepageTile
            description="Proven UI patterns that combine multiple components."
            icon={ICON_NAME.lightbulb}
            path={RECIPES_TITLE.components}
            title="Recipes"
          />
        </div>

        <div className={styles["homepage__content__links"]}>
          <Link
            href={getStartedHref}
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              navigate({ title: HOME_TITLE.getStarted });
            }}
          >
            Get Started <Icon name={ICON_NAME.arrowRight} />
          </Link>

          <ExternalLink href="https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system">
            Design Guidelines
          </ExternalLink>

          <ExternalLink href="https://github.com/ovh/design-system">
            <Icon name={ICON_NAME.github} />
            GitHub repository
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export { Homepage };

import {
  ICON_NAME,
  TEXT_PRESET,
  CARD_COLOR,
  Icon,
  Text,
  Card,
  Link,
  Divider,
  DIVIDER_SPACING,
} from "@ovhcloud/ods-react";
import React from "react";
import { useStoryHref } from "../../helpers/useStoryHref";
import styles from "./homepageTile.module.css";

interface HomepageTileProps {
  icon: ICON_NAME;
  linkLabel: string;
  name?: string;
  path: string;
  title: string;
  description: string;
}

const HomepageTile = ({ icon, linkLabel, name, path, title, description }: HomepageTileProps) => {
  const href = useStoryHref(path, name ?? "docs");

  return (
    <Card className={styles["homepage-tile"]} color={CARD_COLOR.neutral}>
      <div className={styles["homepage-tile__title"]}>
        <Icon className={styles["homepage-tile__icon"]} name={icon} />
        <Text as="h2" preset={TEXT_PRESET.heading6}>
          {title}
        </Text>
      </div>
      <Text>{description}</Text>
      <Divider aria-hidden className={styles["homepage-tile__divider"]} spacing={DIVIDER_SPACING._8} />
      <Link href={href}>
        {linkLabel}
        <Icon name={ICON_NAME.chevronRight} />
      </Link>
    </Card>
  );
};

export { HomepageTile };

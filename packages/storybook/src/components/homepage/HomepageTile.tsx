import { ICON_NAME, TEXT_PRESET, CARD_COLOR, Icon, Text, Card } from "@ovhcloud/ods-react";
import { navigate } from "@storybook/addon-links";
import React from "react";
import { useStoryHref } from "../../helpers/useStoryHref";
import styles from "./homepageTile.module.css";

const HomepageTile = ({
  icon,
  name,
  path,
  title,
  description,
}: {
  icon: ICON_NAME;
  name?: string;
  path: string;
  title: string;
  description: string;
}) => {
  const href = useStoryHref(path, name);

  return (
    <Card className={styles["homepage-tile"]} color={CARD_COLOR.neutral}>
      <a className={styles["homepage-tile__link"]} href={href} onClick={(event) => {
        event.preventDefault();
        navigate({ title: path, name });
      }}>
        <div className={styles["homepage-tile__title"]}>
          <Icon className={styles["homepage-tile__icon"]} name={icon} />
          <Text as="h2" preset={TEXT_PRESET.heading6}>
            {title}
          </Text>
        </div>
        <Text>{description}</Text>
      </a>
    </Card>
  );
};

export { HomepageTile };

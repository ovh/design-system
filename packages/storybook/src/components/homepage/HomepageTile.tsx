import { CARD_COLOR, Card, DIVIDER_SPACING, Divider, ICON_NAME, Icon, Link, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import React from 'react';
import { useStoryHref } from '../../helpers/useStoryHref';
import styles from './homepageTile.module.css';

interface HomepageTileProp {
  description: string;
  icon: ICON_NAME;
  linkLabel: string;
  name?: string;
  path: string;
  title: string;
}

const HomepageTile = ({ description, icon, linkLabel, name, path, title }: HomepageTileProp) => {
  const href = useStoryHref(path, name ?? 'docs');

  return (
    <Card className={ styles['homepage-tile'] } color={ CARD_COLOR.neutral }>
      <div className={ styles['homepage-tile__title'] }>
        <Icon className={ styles['homepage-tile__icon'] } name={ icon } />

        <Text as="h2" preset={ TEXT_PRESET.heading6 }>
          { title }
        </Text>
      </div>

      <Text>{ description }</Text>

      <Divider aria-hidden className={ styles['homepage-tile__divider'] } spacing={ DIVIDER_SPACING._8 } />

      <Link href={ href }>
        { linkLabel }
        <Icon name={ ICON_NAME.chevronRight } />
      </Link>
    </Card>
  );
};

export {
  HomepageTile,
};

import { useNavigate } from 'react-router-dom';
import { CARD_COLOR, Card, DIVIDER_SPACING, Divider, ICON_NAME, Icon, Link, TEXT_PRESET, Text } from '../../../ods';
import styles from './homepageTile.module.css';

interface HomepageTileProp {
  description: string;
  icon: ICON_NAME;
  linkLabel: string;
  path: string;
  title: string;
}

const HomepageTile = ({ description, icon, linkLabel, path, title }: HomepageTileProp) => {
  const navigate = useNavigate();

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

      <Link
        href={ path }
        onClick={ (event) => {
          event.preventDefault();
          navigate(path);
        } }>
        { linkLabel }
        <Icon name={ ICON_NAME.chevronRight } />
      </Link>
    </Card>
  );
};

export {
  HomepageTile,
};

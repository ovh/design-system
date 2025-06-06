import { Tag } from '.';
import { ICON_NAME, Icon } from '../../icon/src';
import { Text } from '../../text/src';
import { TAG_COLORS } from './constants/tag-color';
import { TAG_SIZE } from './constants/tag-size';
import style from './dev.module.css';

export default {
  component: Tag,
  title: 'Tag dev',
};

export const Colors = () => (
  <div style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
    {
      TAG_COLORS.map((color) => (
        <Tag
          color={ color }
          key={ color }>
          { color }
        </Tag>
      ))
    }
  </div>
);

export const Default = () => (
  <Tag>
    Tag
  </Tag>
);

export const Disabled = () => (
  <Tag disabled={ true }>
    Disabled tag
  </Tag>
);

export const RichContent = () => (
  <Tag className={ style['ods-tag'] }>
    <Icon name={ ICON_NAME.email } />

    <Text preset="paragraph">
      Rich content with components
    </Text>
  </Tag>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Tag size={ TAG_SIZE.md }>
      Medium
    </Tag>

    <Tag size={ TAG_SIZE.lg }>
      Large
    </Tag>
  </div>
);

export const WithIcon = () => (
  <Tag className={ style['ods-tag'] }>
    <Icon name={ ICON_NAME.email } />

    <span>
      Tag with icon
    </span>
  </Tag>
);

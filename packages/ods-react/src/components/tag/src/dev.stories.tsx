import { Tag } from '.';
import { ICON_NAME, Icon } from '../../icon/src';
import { Text } from '../../text/src';
import { TAG_COLOR } from './constants/tag-color';
import { TAG_SIZE } from './constants/tag-size';
import style from './dev.module.css';

export default {
  component: Tag,
  title: 'Tag dev',
};

export const Default = () => (
  <Tag>
    Tag
  </Tag>
);

export const WithIcon = () => (
  <Tag className={ style['ods-tag'] }>
      <Icon name={ICON_NAME.email} />
      <span>Tag with icon</span>
  </Tag>
);

export const Colors = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Tag 
      color={TAG_COLOR.critical}
    >
      Critical
    </Tag>
    <Tag 
      color={TAG_COLOR.information}
    >
      Information
    </Tag>
    <Tag 
      color={TAG_COLOR.neutral}
    >
      Neutral
    </Tag>
    <Tag 
      color={TAG_COLOR.success}
    >
      Success
    </Tag>
    <Tag 
      color={TAG_COLOR.warning}
    >
      Warning
    </Tag>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Tag 
      size={TAG_SIZE.md}
    >
      Medium
    </Tag>
    <Tag 
      size={TAG_SIZE.lg}
    >
      Large
    </Tag>
  </div>
);

export const Disabled = () => (
  <Tag 
    disabled={true}
  >
    Disabled tag
  </Tag>
);

export const RichContent = () => (
  <Tag className={style['ods-tag']}>
      <Icon name={ICON_NAME.email} />
      <Text preset="paragraph">Rich content with components</Text>
  </Tag>
);

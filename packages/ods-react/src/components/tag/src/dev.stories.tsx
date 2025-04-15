import { useState } from 'react';
import { Tag } from '.';
import { ICON_NAME, Icon } from '../../icon/src';
import { Text } from '../../text/src';
import { TAG_COLOR } from './constants/tag-color';
import { TAG_SIZE } from './constants/tag-size';
import { type TagRemoveEventDetail } from './components/tag/Tag';
import { Button } from '../../button/src';
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
  <Tag>
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <Icon name={ICON_NAME.email} />
      <span>Tag with icon</span>
    </div>
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
  <Tag>
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <Icon name={ICON_NAME.email} />
      <Text preset="paragraph">Rich content with components</Text>
    </div>
  </Tag>
);

export const RemoveExample = () => {
  const [tags, setTags] = useState([
    { id: 'tag1', color: TAG_COLOR.information, label: 'Information' },
    { id: 'tag2', color: TAG_COLOR.success, label: 'Success' },
    { id: 'tag3', color: TAG_COLOR.warning, label: 'Warning' }
  ]);

  const handleRemove = (id: string): TagRemoveEventDetail => {
    setTags(tags.filter(tag => tag.id !== id));
    return { id };
  };

  return (
    <div>      
      <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
        {tags.map(tag => (
          <Tag 
            key={tag.id}
            color={tag.color}
            onRemove={() => handleRemove(tag.id)}
          >
            {tag.label}
          </Tag>
        ))}
      </div>
      <Button 
        onClick={() => setTags([
          { id: 'tag1', color: TAG_COLOR.information, label: 'Information' },
          { id: 'tag2', color: TAG_COLOR.success, label: 'Success' },
          { id: 'tag3', color: TAG_COLOR.warning, label: 'Warning' }
        ])}
      >
        Reset
      </Button>
    </div>
  );
};

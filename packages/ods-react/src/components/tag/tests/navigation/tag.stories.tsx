import { Tag } from '../../src';

export default {
  component: Tag,
  title: 'Tests navigation',
};

export const disabled = () => (
  <Tag
    data-testid="disabled"
    disabled={ true }>
    Disabled
  </Tag>
);

export const focus = () => (
  <Tag data-testid="focus">
    Focus
  </Tag>
);

export const onRemove = () => (
  <Tag 
    data-testid="onRemove"
    onRemove={() => (window as any).onRemoveHandler()}>
    Removable
  </Tag>
);

export const disabledOnRemove = () => (
  <Tag
    data-testid="disabledOnRemove"
    disabled={true}
    onRemove={() => (window as any).onRemoveHandler()}>
    Disabled Removable
  </Tag>
);

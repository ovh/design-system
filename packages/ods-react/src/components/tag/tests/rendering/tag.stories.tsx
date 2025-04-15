import { TAG_SIZE, Tag } from '../../src';

export default {
  component: Tag,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Tag
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom style
  </Tag>
);

export const render = () => (
  <Tag
    data-testid="render">
    Render
  </Tag>
);

export const sizes = () => (
  <>
    <Tag data-testid="size-md" size={ TAG_SIZE.md }>MD</Tag>
    <Tag data-testid="size-lg" size={ TAG_SIZE.lg }>LG</Tag>
  </>
);

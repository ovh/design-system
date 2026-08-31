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

export const focusLink = () => (
  <Tag
    as="a"
    data-testid="focus-link"
    href="#dummy-target">
    Focus link
  </Tag>
);

export const focus = () => (
  <Tag data-testid="focus">
    Focus
  </Tag>
);

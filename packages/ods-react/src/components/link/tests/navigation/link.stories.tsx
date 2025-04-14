import { Link } from '../../src';

export default {
  component: Link,
  title: 'Tests navigation',
};

export const disabled = () => (
  <Link
    data-testid="disabled"
    disabled={ true }
    href="#">
    Disabled
  </Link>
);

export const focus = () => (
  <Link
    data-testid="focus"
    href="#">
    Focus
  </Link>
);

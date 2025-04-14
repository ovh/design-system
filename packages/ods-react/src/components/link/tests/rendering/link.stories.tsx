import { Link } from '../../src';

export default {
  component: Link,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Link
    data-testid="custom-style"
    href="#"
    style={{ height: '42px' }}>
    Custom Style
  </Link>
);

export const render = () => (
  <Link
    data-testid="render"
    href="#">
    Render
  </Link>
);

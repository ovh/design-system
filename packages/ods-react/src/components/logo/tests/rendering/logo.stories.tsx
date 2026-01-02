import { Logo } from '../../src';

export default {
  component: Logo,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Logo style={{ height: '80px' }} />
);

export const render = () => (
  <Logo />
);

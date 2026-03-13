import { Avatar } from '../../src';

export default {
  component: Avatar,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Avatar style={{ height: '42px' }} />
);

export const render = () => (
  <Avatar />
);

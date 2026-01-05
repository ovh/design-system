import { Tile } from '../../src';

export default {
  component: Tile,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Tile
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <Tile data-testid="render" />
);

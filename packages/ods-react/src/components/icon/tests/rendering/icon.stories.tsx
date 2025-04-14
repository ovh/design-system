import { ICON_NAME, Icon } from '../../src';

export default {
  component: Icon,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Icon
    data-testid="custom-style"
    name={ ICON_NAME.circleCheck }
    style={{ fontSize: '42px' }} />
);

export const render = () => (
  <Icon
    data-testid="render"
    name={ ICON_NAME.circleCheck } />
);

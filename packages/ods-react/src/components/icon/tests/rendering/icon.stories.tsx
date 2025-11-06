import { ICON_NAME, Icon } from '../../src';

export default {
  component: Icon,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Icon
    name={ ICON_NAME.circleCheck }
    style={{ color: 'red' }} />
);

export const render = () => (
  <Icon name={ ICON_NAME.circleCheck } />
);

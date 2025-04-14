import { ICON_NAME, Icon } from '.';

export default {
  component: Icon,
  title: 'Icon dev',
};

export const Default = () => (
  <Icon name={ ICON_NAME.circleCheck } />
);

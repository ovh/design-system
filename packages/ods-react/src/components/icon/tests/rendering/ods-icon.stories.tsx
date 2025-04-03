import { ODS_ICON_NAME, OdsIcon } from '../../src';

export default {
  component: OdsIcon,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsIcon
    data-testid="custom-style"
    name={ ODS_ICON_NAME.circleCheck }
    style={{ fontSize: '42px' }} />
);

export const render = () => (
  <OdsIcon
    data-testid="render"
    name={ ODS_ICON_NAME.circleCheck } />
);

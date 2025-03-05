import { ODS_ICON_NAME, OdsIcon } from '../../src';

export default {
  title: "Tests rendering",
  component: OdsIcon,
};

export const customStyle = () => (
  <OdsIcon
    data-testid="custom-style"
    name={ ODS_ICON_NAME.circleCheck }
    style={{ height: '42px' }} />
);

export const render = () => (
  <OdsIcon
    data-testid="render"
    name={ ODS_ICON_NAME.circleCheck } />
);

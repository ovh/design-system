import { OdsLink } from '../../src';

export default {
  component: OdsLink,
  title: 'Tests navigation',
};

export const disabled = () => (
  <OdsLink
    data-testid="disabled"
    disabled={ true }
    href="#">
    Disabled
  </OdsLink>
);

export const focus = () => (
  <OdsLink
    data-testid="focus"
    href="#">
    Focus
  </OdsLink>
);

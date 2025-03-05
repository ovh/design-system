import { OdsLink } from '../../src';

export default {
  title: "Tests navigation",
  component: OdsLink,
};

export const render = () => (
  <OdsLink
    data-testid="render"
    label="Render" />
);

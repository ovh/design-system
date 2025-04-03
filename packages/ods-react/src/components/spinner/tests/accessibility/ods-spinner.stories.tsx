import { OdsSpinner } from '../../src';

export default {
  component: OdsSpinner,
  title: 'Tests accessibility',
};

export const role = () => (
  <OdsSpinner data-testid="role" />
);

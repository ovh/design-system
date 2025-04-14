import { Spinner } from '../../src';

export default {
  component: Spinner,
  title: 'Tests accessibility',
};

export const role = () => (
  <Spinner data-testid="role" />
);

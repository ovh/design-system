import { Button } from '../../src';

export default {
  component: Button,
  title: 'Tests navigation',
};

export const disabled = () => (
  <Button
    data-testid="disabled"
    disabled={ true }>
    Disabled
  </Button>
);

export const focus = () => (
  <Button data-testid="focus">
    Focus
  </Button>
);

export const isLoading = () => (
  <Button
    data-testid="is-loading"
    isLoading={ true }>
    Is Loading
  </Button>
);

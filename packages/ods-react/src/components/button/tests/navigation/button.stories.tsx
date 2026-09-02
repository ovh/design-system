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

export const disabledLink = () => (
  <Button
    as="a"
    data-testid="disabled-link"
    disabled={ true }
    href="#dummy-target">
    Disabled link
  </Button>
);

export const focus = () => (
  <Button data-testid="focus">
    Focus
  </Button>
);

export const focusLink = () => (
  <Button
    as="a"
    data-testid="focus-link"
    href="#dummy-target">
    Focus link
  </Button>
);

export const isLoading = () => (
  <Button
    data-testid="is-loading"
    loading={ true }>
    Is Loading
  </Button>
);

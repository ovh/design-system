import { OdsButton } from '../../src';

export default {
  component: OdsButton,
  title: 'Tests navigation',
};

export const disabled = () => (
  <OdsButton
    data-testid="disabled"
    disabled={ true }>
    Disabled
  </OdsButton>
);

export const focus = () => (
  <OdsButton data-testid="focus">
    Focus
  </OdsButton>
);

export const isLoading = () => (
  <OdsButton
    data-testid="is-loading"
    isLoading={ true }>
    Is Loading
  </OdsButton>
);

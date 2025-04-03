import { OdsButton } from '.';

export default {
  component: OdsButton,
  title: 'OdsButton dev',
};

export const Default = () => (
  <OdsButton>
    Default
  </OdsButton>
);

export const IsLoading = () => (
  <OdsButton isLoading={ true }>
    IsLoading
  </OdsButton>
);

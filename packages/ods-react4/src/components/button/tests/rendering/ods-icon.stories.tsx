import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT, OdsButton } from '../../src';

export default {
  title: "Tests rendering",
  component: OdsButton,
};

export const customStyle = () => (
  <OdsButton data-testid="custom-style" color={ODS_BUTTON_COLOR.primary} size={ODS_BUTTON_SIZE.xs} variant={ODS_BUTTON_VARIANT.default}>
    My button
  </OdsButton>
);

export const render = () => (
      <OdsButton data-testid="render" color={ODS_BUTTON_COLOR.primary} size={ODS_BUTTON_SIZE.xs} variant={ODS_BUTTON_VARIANT.default}>
    My button
  </OdsButton>
);

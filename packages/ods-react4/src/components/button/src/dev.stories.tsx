import { OdsButton, ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT  } from '.';

export default {
  title: "OdsButton dev",
  component: OdsButton,
};

export const Default = () => (
  <OdsButton color={ODS_BUTTON_COLOR.primary} size={ODS_BUTTON_SIZE.xs} variant={ODS_BUTTON_VARIANT.default}>
    My button
  </OdsButton>
);

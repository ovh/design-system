import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT, OdsButton } from '../../src';

export default {
  component: OdsButton,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsButton
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom style
  </OdsButton>
);

export const isLoading = () => (
  <OdsButton
    data-testid="is-loading"
    isLoading={ true }>
    Is Loading
  </OdsButton>
);

export const render = () => (
  <OdsButton
    data-testid="render">
    Render
  </OdsButton>
);

export const sizes = () => (
  <>
    <OdsButton data-testid="size-xs" size={ ODS_BUTTON_SIZE.xs }>XS</OdsButton>
    <OdsButton data-testid="size-sm" size={ ODS_BUTTON_SIZE.sm }>SM</OdsButton>
    <OdsButton data-testid="size-md" size={ ODS_BUTTON_SIZE.md }>MD</OdsButton>
  </>
);

export const variantsMd = () => (
  <>
    <OdsButton data-testid="variant-md-default" size={ ODS_BUTTON_SIZE.md } variant={ ODS_BUTTON_VARIANT.default }>Default</OdsButton>
    <OdsButton data-testid="variant-md-ghost" size={ ODS_BUTTON_SIZE.md } variant={ ODS_BUTTON_VARIANT.ghost }>Ghost</OdsButton>
    <OdsButton data-testid="variant-md-outline" size={ ODS_BUTTON_SIZE.md } variant={ ODS_BUTTON_VARIANT.outline }>Outline</OdsButton>
  </>
);

export const variantsSm = () => (
  <>
    <OdsButton data-testid="variant-sm-default" size={ ODS_BUTTON_SIZE.sm } variant={ ODS_BUTTON_VARIANT.default }>Default</OdsButton>
    <OdsButton data-testid="variant-sm-ghost" size={ ODS_BUTTON_SIZE.sm } variant={ ODS_BUTTON_VARIANT.ghost }>Ghost</OdsButton>
    <OdsButton data-testid="variant-sm-outline" size={ ODS_BUTTON_SIZE.sm } variant={ ODS_BUTTON_VARIANT.outline }>Outline</OdsButton>
  </>
);

export const variantsXs = () => (
  <>
    <OdsButton data-testid="variant-xs-default" size={ ODS_BUTTON_SIZE.xs } variant={ ODS_BUTTON_VARIANT.default }>Default</OdsButton>
    <OdsButton data-testid="variant-xs-ghost" size={ ODS_BUTTON_SIZE.xs } variant={ ODS_BUTTON_VARIANT.ghost }>Ghost</OdsButton>
    <OdsButton data-testid="variant-xs-outline" size={ ODS_BUTTON_SIZE.xs } variant={ ODS_BUTTON_VARIANT.outline }>Outline</OdsButton>
  </>
);

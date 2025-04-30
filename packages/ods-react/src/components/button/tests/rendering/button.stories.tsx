import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../src';

export default {
  component: Button,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Button
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom style
  </Button>
);

export const isLoading = () => (
  <Button
    data-testid="is-loading"
    loading={ true }>
    Is Loading
  </Button>
);

export const render = () => (
  <Button
    data-testid="render">
    Render
  </Button>
);

export const sizes = () => (
  <>
    <Button data-testid="size-xs" size={ BUTTON_SIZE.xs }>XS</Button>
    <Button data-testid="size-sm" size={ BUTTON_SIZE.sm }>SM</Button>
    <Button data-testid="size-md" size={ BUTTON_SIZE.md }>MD</Button>
  </>
);

export const variantsMd = () => (
  <>
    <Button data-testid="variant-md-default" size={ BUTTON_SIZE.md } variant={ BUTTON_VARIANT.default }>Default</Button>
    <Button data-testid="variant-md-ghost" size={ BUTTON_SIZE.md } variant={ BUTTON_VARIANT.ghost }>Ghost</Button>
    <Button data-testid="variant-md-outline" size={ BUTTON_SIZE.md } variant={ BUTTON_VARIANT.outline }>Outline</Button>
  </>
);

export const variantsSm = () => (
  <>
    <Button data-testid="variant-sm-default" size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.default }>Default</Button>
    <Button data-testid="variant-sm-ghost" size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.ghost }>Ghost</Button>
    <Button data-testid="variant-sm-outline" size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.outline }>Outline</Button>
  </>
);

export const variantsXs = () => (
  <>
    <Button data-testid="variant-xs-default" size={ BUTTON_SIZE.xs } variant={ BUTTON_VARIANT.default }>Default</Button>
    <Button data-testid="variant-xs-ghost" size={ BUTTON_SIZE.xs } variant={ BUTTON_VARIANT.ghost }>Ghost</Button>
    <Button data-testid="variant-xs-outline" size={ BUTTON_SIZE.xs } variant={ BUTTON_VARIANT.outline }>Outline</Button>
  </>
);

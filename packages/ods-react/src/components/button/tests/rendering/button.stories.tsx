import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_STATUS, BUTTON_STATUSES, BUTTON_VARIANT, BUTTON_VARIANTS, Button, type ButtonStatus } from '../../src';

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
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16">
      <rect height="16" width="16" />
    </svg>
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

export const deprecatedColor = () => (
  <>
    <Button color={ BUTTON_COLOR.primary } data-testid="color-primary">Primary</Button>
    <Button data-testid="status-brand" status={ BUTTON_STATUS.brand }>Brand</Button>
    <Button color={ BUTTON_COLOR.critical } data-testid="color-critical-status-neutral" status={ BUTTON_STATUS.neutral }>Both</Button>
    <Button data-testid="status-neutral" status={ BUTTON_STATUS.neutral }>Neutral</Button>
    <Button color={ BUTTON_COLOR.information } data-testid="color-information">Information</Button>
    <Button color={ BUTTON_COLOR.success } data-testid="color-success">Success</Button>
    <Button color={ BUTTON_COLOR.warning } data-testid="color-warning">Warning</Button>
    <Button data-testid="status-none" status={ 'none' as ButtonStatus }>None</Button>
  </>
);

export const statuses = () => (
  <>
    {
      BUTTON_VARIANTS.map((variant) => (
        <div key={ variant }>
          <Button
            data-testid={ `status-none-${variant}` }
            status={ 'none' as ButtonStatus }
            variant={ variant }>
            None
          </Button>

          {
            BUTTON_STATUSES.map((status) => (
              <Button
                data-testid={ `status-${status}-${variant}` }
                key={ status }
                status={ status }
                variant={ variant }>
                { status }
              </Button>
            ))
          }
        </div>
      ))
    }
  </>
);

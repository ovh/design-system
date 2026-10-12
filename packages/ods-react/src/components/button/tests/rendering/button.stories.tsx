import { BUTTON_COLOR, BUTTON_EMPHASES, BUTTON_EMPHASIS, BUTTON_SIZE, BUTTON_STATUS, BUTTON_STATUSES, Button, type ButtonEmphasis, type ButtonStatus } from '../../src';

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

export const emphasesMd = () => (
  <>
    <Button data-testid="emphasis-md-high" emphasis={ BUTTON_EMPHASIS.high } size={ BUTTON_SIZE.md }>High</Button>
    <Button data-testid="emphasis-md-low" emphasis={ BUTTON_EMPHASIS.low } size={ BUTTON_SIZE.md }>Low</Button>
    <Button data-testid="emphasis-md-medium" emphasis={ BUTTON_EMPHASIS.medium } size={ BUTTON_SIZE.md }>Medium</Button>
  </>
);

export const emphasesSm = () => (
  <>
    <Button data-testid="emphasis-sm-high" emphasis={ BUTTON_EMPHASIS.high } size={ BUTTON_SIZE.sm }>High</Button>
    <Button data-testid="emphasis-sm-low" emphasis={ BUTTON_EMPHASIS.low } size={ BUTTON_SIZE.sm }>Low</Button>
    <Button data-testid="emphasis-sm-medium" emphasis={ BUTTON_EMPHASIS.medium } size={ BUTTON_SIZE.sm }>Medium</Button>
  </>
);

export const emphasesXs = () => (
  <>
    <Button data-testid="emphasis-xs-high" emphasis={ BUTTON_EMPHASIS.high } size={ BUTTON_SIZE.xs }>High</Button>
    <Button data-testid="emphasis-xs-low" emphasis={ BUTTON_EMPHASIS.low } size={ BUTTON_SIZE.xs }>Low</Button>
    <Button data-testid="emphasis-xs-medium" emphasis={ BUTTON_EMPHASIS.medium } size={ BUTTON_SIZE.xs }>Medium</Button>
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
      BUTTON_EMPHASES.map((emphasis) => (
        <div key={ emphasis }>
          <Button
            data-testid={ `status-none-${emphasis}` }
            emphasis={ emphasis }
            status={ 'none' as ButtonStatus }>
            None
          </Button>

          {
            BUTTON_STATUSES.map((status) => (
              <Button
                data-testid={ `status-${status}-${emphasis}` }
                emphasis={ emphasis }
                key={ status }
                status={ status }>
                { status }
              </Button>
            ))
          }
        </div>
      ))
    }
  </>
);

export const emphases = () => (
  <>
    <Button data-testid="emphasis-none">Default</Button>
    <Button data-testid="emphasis-unknown" emphasis={ 'unknown' as ButtonEmphasis }>Unknown</Button>
    {
      BUTTON_STATUSES.map((status) => (
        <div key={ status }>
          {
            BUTTON_EMPHASES.map((emphasis) => (
              <Button
                data-testid={ `emphasis-${status}-${emphasis}` }
                emphasis={ emphasis }
                key={ emphasis }
                status={ status }>
                { emphasis }
              </Button>
            ))
          }
        </div>
      ))
    }
  </>
);

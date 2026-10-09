import style from './dev.module.css';
import { BUTTON_SIZES, BUTTON_STATUS, BUTTON_STATUSES, BUTTON_VARIANTS, Button } from '.';

export default {
  component: Button,
  title: 'Button dev',
};

export const Statuses = () => (
  <div style={{ display: 'flex', flexFlow: 'column', rowGap: '16px' }}>
    {
      BUTTON_VARIANTS.map((variant) => (
        <div
          key={ variant }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            BUTTON_STATUSES.map((status) => (
              <Button
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
  </div>
);

export const CustomStyle = () => (
  <>
    <Button className={ style['custom-button'] }>
      Custom Styled Button
    </Button>

    <br /><br />
    <Button status={ BUTTON_STATUS.critical }>
      Normal critical
    </Button>
    <Button
      className={ style['custom-button-critical'] }
      status={ BUTTON_STATUS.critical }>
      Overridden critical
    </Button>
  </>
);

export const Default = () => (
  <Button>
    Default
  </Button>
);

export const IsLoading = () => (
  <Button loading={ true }>
    IsLoading
  </Button>
);

export const Accessibility = () => (
  <Button aria-label="Accessibility">
    Accessibility
  </Button>
);

export const Sizes = () => (
  <div style={{ display: 'flex', flexFlow: 'column', rowGap: '16px' }}>
    {
      BUTTON_VARIANTS.map((variant) => (
        <div
          key={ variant }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            BUTTON_SIZES.map((size) => (
              <Button
                style={{ alignSelf: 'center' }}
                key={ size }
                size={ size }
                variant={ variant }>
                { variant } - { size }
              </Button>
            ))
          }
        </div>
      ))
    }
  </div>
);

import style from './dev.module.css';
import { BUTTON_EMPHASES, BUTTON_SIZES, BUTTON_STATUS, BUTTON_STATUSES, Button } from '.';

export default {
  component: Button,
  title: 'Button dev',
};

export const Statuses = () => (
  <div style={{ display: 'flex', flexFlow: 'column', rowGap: '16px' }}>
    {
      BUTTON_EMPHASES.map((emphasis) => (
        <div
          key={ emphasis }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            BUTTON_STATUSES.map((status) => (
              <Button
                emphasis={ emphasis }
                key={ status }
                status={ status }>
                { emphasis } - { status }
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
      BUTTON_EMPHASES.map((emphasis) => (
        <div
          key={ emphasis }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            BUTTON_SIZES.map((size) => (
              <Button
                emphasis={ emphasis }
                style={{ alignSelf: 'center' }}
                key={ size }
                size={ size }>
                { emphasis } - { size }
              </Button>
            ))
          }
        </div>
      ))
    }
  </div>
);

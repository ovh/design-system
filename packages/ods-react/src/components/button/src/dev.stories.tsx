import { BUTTON_COLORS, BUTTON_VARIANTS, Button } from '.';
import style from './dev.module.css';

export default {
  component: Button,
  title: 'Button dev',
};

export const Colors = () => (
  <div style={{ display: 'flex', flexFlow: 'column', rowGap: '16px' }}>
    {
      BUTTON_VARIANTS.map((variant) => (
        <div
          key={ variant }
          style={{ display: 'flex', flexFlow: 'row', columnGap: '8px' }}>
          {
            BUTTON_COLORS.map((color) => (
              <Button
                color={ color }
                key={ color }
                variant={ variant }>
                { color }
              </Button>
            ))
          }
        </div>
      ))
    }
  </div>
);

export const CustomStyle = () => (
  <Button className={ style['custom-button'] }>
    Custom Styled Button
  </Button>
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
)

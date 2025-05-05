import { Button } from '.';
import style from './dev.module.css';

export default {
  component: Button,
  title: 'Button dev',
};

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

export const CustomStyle = () => (
  <Button className={ style['custom-button'] }>
    Custom Styled Button
  </Button>
);

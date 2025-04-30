import { Button } from '.';

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

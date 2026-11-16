import { VisuallyHidden } from '../../src';

export default {
  component: VisuallyHidden,
  title: 'Tests rendering',
};

export const render = () => (
  <p>
    Visible text
    <VisuallyHidden data-testid="render">
      Hidden text
    </VisuallyHidden>
  </p>
);

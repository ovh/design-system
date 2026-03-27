import { Markdown } from '../../src';

export default {
  component: Markdown,
  title: 'Tests rendering',
};

export const Render = () => (
  <div data-testid="render">
    <Markdown content="Dummy content" />
  </div>
);

import { Code } from '../../src';

export default {
  component: Code,
  title: 'Tests rendering',
};

export const render = () => (
  <Code data-testid="render">
    console.log('Hello world');
  </Code>
);

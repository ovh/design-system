import { Code } from '../../src';

export default {
  component: Code,
  title: 'Tests accessibility',
};

export const Role = () => (
  <>
    <Code data-testid="static">
      console.log('Hello world');
    </Code>

    <Code
      canCopy
      data-testid="copyable">
      console.log('Hello world');
    </Code>
  </>
);

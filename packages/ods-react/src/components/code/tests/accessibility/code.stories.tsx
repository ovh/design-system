import { Code } from '../../src';

export default {
  component: Code,
  title: 'Tests accessibility',
};

export const CopyStatus = () => (
  <Code
    canCopy
    labelCopySuccess="Snippet copied">
    npm install @ovhcloud/ods-react
  </Code>
);

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

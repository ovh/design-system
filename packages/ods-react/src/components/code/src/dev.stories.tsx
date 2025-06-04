import { Code } from '.';

export default {
  component: Code,
  title: 'Code dev',
};

export const Default = () => (
  <Code>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const CanCopy = () => (
  <Code canCopy>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

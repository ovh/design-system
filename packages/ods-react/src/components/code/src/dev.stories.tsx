import { Code } from '.';
import style from './dev.module.css'

export default {
  component: Code,
  title: 'Code dev',
};

export const Default = () => (
  <Code>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const CustomStyle = () => (
  <Code canCopy className={ style['custom-code'] }>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
)

export const CanCopy = () => (
  <Code canCopy>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

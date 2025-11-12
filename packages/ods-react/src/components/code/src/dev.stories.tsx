import { Code } from '.';
import style from './dev.module.css'
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';

export default {
  component: Code,
  title: 'Code dev',
};

export const CanCopy = () => (
  <Code canCopy>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const CustomStyle = () => (
  <Code canCopy className={ style['custom-code'] }>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const Default = () => (
  <Code>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const Highlight = () => (
  <>
    <Code
      highlighter={{
        language: lang,
        theme: theme,
      }}>
      {`import { Text } from '@ovhcloud/ods-react';`}
    </Code>

    <br />

    <Code
      canCopy
      highlighter={{
        language: lang,
        theme: theme,
      }}>
      {`import { Text } from '@ovhcloud/ods-react';`}
    </Code>
  </>
);

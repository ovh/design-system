import tsxLang from '@shikijs/langs/tsx';
import githubLight from '@shikijs/themes/github-light';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import { type CSSProperties } from 'react';
import { Code } from '../../../ods-react/src/components/code/src';
import { useDocTheme } from './useDocTheme';

/* Every code snippet of the docs goes through here: ODS Code, copy button
   always on, shiki theme following the docs light/dark mode. */
const CodeBlock = ({ children, style }: { children: string, style?: CSSProperties }) => {
  const theme = useDocTheme();

  return (
    <Code
      canCopy
      highlighter={{ language: tsxLang, theme: theme === 'dark' ? oneDarkPro : githubLight }}
      style={ style }>
      { children }
    </Code>
  );
};

export { CodeBlock };

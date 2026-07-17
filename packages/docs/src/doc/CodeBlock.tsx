import tsxLang from '@shikijs/langs/tsx';
import githubLight from '@shikijs/themes/github-light';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import { type CSSProperties } from 'react';
import { Code } from '../../../ods-react/src/components/code/src';
import { useDocTheme } from './useDocTheme';

/* The ODS Code surface comes from the shiki theme (it maps
   colors['editor.background'] to an inline custom property, which beats any
   stylesheet). github-light's white background is invisible on a white page,
   so the light theme is re-grounded on the ODS neutral-050 value. */
const lightTheme = {
  ...githubLight,
  colors: { ...githubLight.colors, 'editor.background': '#f2f2f2' },
};

/* Every code snippet of the docs goes through here: ODS Code, copy button
   always on, shiki theme following the docs light/dark mode. */
const CodeBlock = ({ children, style }: { children: string, style?: CSSProperties }) => {
  const theme = useDocTheme();

  return (
    <Code
      canCopy
      highlighter={{ language: tsxLang, theme: theme === 'dark' ? oneDarkPro : lightTheme }}
      style={ style }>
      { children }
    </Code>
  );
};

export { CodeBlock };

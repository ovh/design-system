import bashLang from '@shikijs/langs/bash';
import cssLang from '@shikijs/langs/css';
import htmlLang from '@shikijs/langs/html';
import jsonLang from '@shikijs/langs/json';
import scssLang from '@shikijs/langs/scss';
import tsxLang from '@shikijs/langs/tsx';
import yamlLang from '@shikijs/langs/yaml';
import githubLight from '@shikijs/themes/github-light-default';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import { type CSSProperties } from 'react';
import { Code } from '../../../ods-react/src/components/code/src';
import { useDocTheme } from './useDocTheme';

type Language = typeof tsxLang;

/* A grammar without rules: plain text still goes through the highlighter, so it gets the theme's
   surface like any other block. */
const textLang = [{ name: 'text', patterns: [], repository: {}, scopeName: 'text.plain' }] as unknown as Language;

/* By the language of a Markdown fence (```bash): an unknown one is read as TSX, the docs' default. */
const LANGUAGES: Record<string, Language> = {
  bash: bashLang,
  css: cssLang,
  html: htmlLang,
  js: tsxLang,
  json: jsonLang,
  scss: scssLang,
  sh: bashLang,
  shell: bashLang,
  text: textLang,
  ts: tsxLang,
  tsx: tsxLang,
  typescript: tsxLang,
  yaml: yamlLang,
};

/* The shiki theme of every code block, following the docs light/dark mode. */
const useCodeTheme = () => (useDocTheme() === 'dark' ? oneDarkPro : githubLight);

/* Every code snippet of the docs goes through here: ODS Code, copy button
   always on, shiki theme following the docs light/dark mode.
   positionerStyle is forwarded for snippets living inside an overlay (drawer,
   modal), where the copy tooltip needs to sit above it. */
interface CodeBlockProp {
  children: string;
  label?: string;
  language?: string;
  positionerStyle?: CSSProperties;
  style?: CSSProperties;
}

const CodeBlock = ({ children, label, language = 'tsx', positionerStyle, style }: CodeBlockProp) => {
  const theme = useCodeTheme();

  return (
    <Code
      aria-label={ label }
      canCopy
      highlighter={{ language: LANGUAGES[language] ?? tsxLang, theme }}
      positionerStyle={ positionerStyle }
      style={ style }>
      { children }
    </Code>
  );
};

export { CodeBlock, useCodeTheme };

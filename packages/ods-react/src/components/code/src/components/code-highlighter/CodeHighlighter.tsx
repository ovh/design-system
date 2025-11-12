import { type HighlighterCore, type LanguageRegistration, type ThemeRegistration } from '@shikijs/types';
import { type FC, type JSX } from 'react';
import { useShikiHighlighter } from 'react-shiki/core';
import style from './codeHighlighter.module.scss';

interface CodeHighlighterProp {
  code: string,
  highlighter: HighlighterCore
  language: LanguageRegistration,
  theme: ThemeRegistration,
}

const CodeHighlighter: FC<CodeHighlighterProp> = ({
  code,
  highlighter,
  language,
  theme,
}): JSX.Element => {
  const highlightedCode = useShikiHighlighter(code, language, theme, {
    highlighter,
  });

  return (
    <div className={ style['code-highlighter'] }>
      { highlightedCode }
    </div>
  );
};

CodeHighlighter.displayName = 'CodeHighlighter';

export {
  CodeHighlighter,
  type CodeHighlighterProp,
};

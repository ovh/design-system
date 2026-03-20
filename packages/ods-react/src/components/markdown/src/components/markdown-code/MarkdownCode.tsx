import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { Code } from '../../../../code/src';
import { TEXT_PRESET, Text } from '../../../../text/src';

const CodeBlockContext = createContext(false);

const MarkdownCode = ({ children }: { children?: ReactNode }): JSX.Element => {
  const isBlock = useContext(CodeBlockContext);

  if (isBlock) {
    return (
      <Code>
        { children as string }
      </Code>
    );
  }

  return (
    <Text
      as="code"
      preset={ TEXT_PRESET.code }>
      { children }
    </Text>
  );
};

const MarkdownPre = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <CodeBlockContext.Provider value={ true }>
      { children }
    </CodeBlockContext.Provider>
  );
};

MarkdownCode.displayName = 'MarkdownCode';
MarkdownPre.displayName = 'MarkdownPre';

export {
  MarkdownCode,
  MarkdownPre,
};

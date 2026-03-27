import { type ComponentType, type FC, type JSX, useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DIVIDER_SPACING, Divider } from '../../../../divider/src';
import { Link } from '../../../../link/src';
import { Medium } from '../../../../medium/src';
import { Table } from '../../../../table/src';
import { TEXT_PRESET, Text } from '../../../../text/src';
import { MarkdownCode, MarkdownPre } from '../markdown-code/MarkdownCode';

interface MarkdownProp {
  /**
   * @type=Record<keyof JSX.IntrinsicElements, ReactNode>
   * Override of default component rendering
   */
  component?: { [Key in keyof JSX.IntrinsicElements]?: ComponentType<JSX.IntrinsicElements[Key]> | keyof JSX.IntrinsicElements; },
  /**
   * The Markdown content to transform.
   */
  content: string;
}

// Remove the extra properties passed to custom component by react-markdown lib
function sanitize(component: MarkdownProp['component'] = {}): Components {
  return Object.entries(component).reduce<Components>((res, [key, value]) => {
    // @ts-ignore TODO improve
    res[key] = typeof value === 'function' ? ({ node, ...props }): JSX.Element => value(props) : value;
    return res;
  }, {});
}

const Markdown: FC<MarkdownProp> = ({
  component,
  content,
  ...props
}): JSX.Element => {
  const componentMap = useMemo<Components>(() => ({
    a: ({ children, node, ref, ...props }) => <Link { ...props }>{ children }</Link>,
    blockquote: ({ children, node, ref, ...props }) => <Text as="blockquote" preset={ TEXT_PRESET.blockquote } { ...props }>{ children }</Text>,
    code: MarkdownCode,
    h1: ({ children, node, ref, ...props }) => <Text as="h1" preset={ TEXT_PRESET.heading1 } { ...props }>{ children }</Text>,
    h2: ({ children, node, ref, ...props }) => <Text as="h2" preset={ TEXT_PRESET.heading2 } { ...props }>{ children }</Text>,
    h3: ({ children, node, ref, ...props }) => <Text as="h3" preset={ TEXT_PRESET.heading3 } { ...props }>{ children }</Text>,
    h4: ({ children, node, ref, ...props }) => <Text as="h4" preset={ TEXT_PRESET.heading4 } { ...props }>{ children }</Text>,
    h5: ({ children, node, ref, ...props }) => <Text as="h5" preset={ TEXT_PRESET.heading5 } { ...props }>{ children }</Text>,
    h6: ({ children, node, ref, ...props }) => <Text as="h6" preset={ TEXT_PRESET.heading6 } { ...props }>{ children }</Text>,
    hr: ({ color, node, ref, ...props }) => <Divider spacing={ DIVIDER_SPACING._8 } { ...props } />,
    img: ({ node, ref, ...props }) => <Medium { ...props } />,
    pre: MarkdownPre,
    table: ({ children, node, ref, ...props }) => <Table { ...props }>{ children }</Table>,
    ...sanitize(component),
  }), [component]);

  return (
    <ReactMarkdown
      components={ componentMap }
      remarkPlugins={ [remarkGfm] }
      { ...props }>
      { content }
    </ReactMarkdown>
  );
};

Markdown.displayName = 'Markdown';

export {
  Markdown,
  type MarkdownProp,
};

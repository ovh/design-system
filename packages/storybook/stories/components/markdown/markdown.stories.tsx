import { type Meta, type StoryObj } from '@storybook/react';
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';
import React from 'react';
import { Code } from '../../../../ods-react/src/components/code/src';
import { Markdown, type MarkdownProp } from '../../../../ods-react/src/components/markdown/src';
import { TABS_VARIANT, Tabs, TabContent, TabList, Tab } from '../../../../ods-react/src/components/tabs/src';
import { TEXT_PRESET, Text } from '../../../../ods-react/src/components/text/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';
import { Link } from '@ovhcloud/ods-react';

type Story = StoryObj<MarkdownProp>;

const meta: Meta<MarkdownProp> = {
  argTypes: excludeFromDemoControls(['component']),
  component: Markdown,
  tags: ['new'],
  title: 'React Components/Markdown',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
  }),
  args: {
    content: 'Markdown **bold** content',
  },
};

export const CodeHighlighter: Story = {
  globals: {
    imports: `import { Code, Markdown } from '@ovhcloud/ods-react';
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Markdown
      component={{
        code: ({ children }) => {
          return (
            <Code
              highlighter={{
                language: lang,
                theme: theme,
              }}>
              { children as string }
            </Code>
          );
        }
      }}
      content={`# Highlighted Code
  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`
  `} />
  ),
};

export const CustomComponent: Story = {
  globals: {
    imports: `import { Link, Markdown } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => (
    <Markdown
      component={{
        a: ({ children, href }) => <Link href={ href } target="_blank">{ children }</Link>,
      }}
      content="Here is an example with a [target blank link](https://ovh.github.io/design-system/)" />
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Markdown } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Markdown content={`# Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  > Blockquotes

  \`Inline code\`
  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`

  | Column 1 | Column 2 |
  | --- | --- |
  | Value 1 | Value 2 |
  `} />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => {
    const content = `# Readme
Wanna know more about **OVHCloud Design System**?

Check the [Documentation](https://ovh.github.io/design-system/).`;

    return (
      <Tabs
        defaultValue="preview"
        style={{ height: '240px', width: '350px' }}
        variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="preview">Preview</Tab>
          <Tab value="source">Source</Tab>
        </TabList>

        <TabContent value="preview">
          <Markdown content={ content} />
        </TabContent>

        <TabContent value="source">
          <Text
            preset={ TEXT_PRESET.paragraph }
            style={{ whiteSpace: 'break-spaces' }}>
            { content }
          </Text>
        </TabContent>
      </Tabs>
    );
  },
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Markdown content={`# Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  > Blockquotes

  \`Inline code\`
  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`

  | Column 1 | Column 2 |
  | --- | --- |
  | Value 1 | Value 2 |
  `} />
  ),
};

import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';
import { Code } from '../../code/src';
import { Markdown } from '.';

export default {
  component: Markdown,
  title: 'Markdown dev',
};

export const CustomComponents = () => (
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
    content={`# heading 1
  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`
`} />
);

export const Default = () => (
  <Markdown content="Hello World!" />
);

export const ODSComponents = () => {
  const content = `# heading 1
  [Duck Duck Go](https://duckduckgo.com)
  ## heading 2
  list:
  - option 1
  - option 2
  - option 3
  ---
  ### heading 3
  > Some blockquotes
  #### heading 4
  Some **emphasis** (with __alternative__ syntax)
  ##### heading 5
  Inline \`code sample\`.

  \`\`\`
  // print something in the console
  console.log('Hello World!');
  \`\`\`
  ###### heading 6
  ![Some dummy image](https://dummyimage.com/60x40/000/fff "Dummy image")

  | foo | bar |
  | --- | --- |
  | baz | bim |
  `;

  return (
    <>
      <h1>ODS</h1>
      <Markdown content={ content } />

      <br /><br />

      <h1>Native</h1>
      <Markdown
        component={{ a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', hr: 'hr', img: 'img', pre: 'pre', table: 'table' }}
        content={ content } />
    </>
  );
}

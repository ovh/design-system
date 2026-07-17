import { CodeBlock } from '../doc/CodeBlock';

/* The demo source sits right below the rendered example — same code the
   frame executes, straight from the story file. */
const DemoSource = ({ source }: { source: string }) => (
  <CodeBlock style={{ marginTop: '8px', width: '100%' }}>
    { source }
  </CodeBlock>
);

export { DemoSource };

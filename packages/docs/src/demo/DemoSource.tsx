import tsxLang from '@shikijs/langs/tsx';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import { useState } from 'react';
import { Code } from '../../../ods-react/src/components/code/src';

/* The highlighter only mounts once the details is opened: shiki instances
   are heavy and a page renders a dozen sources. */
const DemoSource = ({ source }: { source: string }) => {
  const [opened, setOpened] = useState(false);

  return (
    <details onToggle={ (e) => setOpened((e.target as HTMLDetailsElement).open) } style={{ marginTop: '4px' }}>
      <summary style={{ cursor: 'pointer', fontSize: '.85rem' }}>Code</summary>
      { opened && (
        <Code
          highlighter={{ language: tsxLang, theme: oneDarkPro }}
          style={{ display: 'block', marginTop: '8px' }}>
          { source }
        </Code>
      ) }
    </details>
  );
};

export { DemoSource };

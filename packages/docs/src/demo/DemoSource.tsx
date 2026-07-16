import tsxLang from '@shikijs/langs/tsx';
import oneDarkPro from '@shikijs/themes/one-dark-pro';
import { Code } from '../../../ods-react/src/components/code/src';

const DemoSource = ({ source }: { source: string }) => {
  return (
    <details style={{ marginTop: '4px' }}>
      <summary style={{ cursor: 'pointer', fontSize: '.85rem' }}>Code</summary>
      <Code
        highlighter={{ language: tsxLang, theme: oneDarkPro }}
        style={{ display: 'block', marginTop: '8px' }}>
        { source }
      </Code>
    </details>
  );
};

export { DemoSource };

import { useLocation } from 'react-router-dom';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Link } from '../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { APP_ROOT } from '../appBase';
import { llmsFileFor } from './llmsFile';

/* Opens the page as Markdown, the exact file the AI toolchain consumes (llms, see llmsFile.ts), in a
   new tab: a link, so that the URL can be read, shared or handed to an assistant as is. Small, beside
   the table of contents title: the Link takes the caption size of the Text around it. The new tab is
   said to assistive technologies. Nothing on pages that emit no llms document. */
const MarkdownLink = ({ className }: { className?: string }) => {
  const file = llmsFileFor(useLocation().pathname);

  if (!file) {
    return null;
  }

  return (
    <Text as="span" className={ className } preset={ TEXT_PRESET.caption }>
      <Link
        className="markdown-link"
        data-testid="view-as-markdown"
        href={ new URL(`llms/${file}`, APP_ROOT).href }
        rel="noreferrer"
        target="_blank">
        <Icon name={ ICON_NAME.robot } /> Markdown<span className="sr-only"> version of this page (opens in a new tab)</span>
      </Link>
    </Text>
  );
};

export { MarkdownLink };

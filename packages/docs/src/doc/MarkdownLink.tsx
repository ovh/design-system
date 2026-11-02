import { useLocation } from 'react-router-dom';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Link } from '../../../ods-react/src/components/link/src';
import { APP_ROOT } from '../appBase';
import { llmsFileFor } from './llmsFile';

/* Opens the page as Markdown, the exact file the AI toolchain consumes (llms, see llmsFile.ts), in a
   new tab: a link, so that the URL can be read, shared or handed to an assistant as is. Nothing on
   pages that emit no llms document. */
const MarkdownLink = () => {
  const file = llmsFileFor(useLocation().pathname);

  if (!file) {
    return null;
  }

  return (
    <Link
      className="doc-layout__markdown-link"
      data-testid="view-as-markdown"
      href={ new URL(`llms/${file}`, APP_ROOT).href }
      rel="noreferrer"
      target="_blank">
      <Icon name={ ICON_NAME.robot } /> View as Markdown <Icon name={ ICON_NAME.externalLink } />
    </Link>
  );
};

export { MarkdownLink };

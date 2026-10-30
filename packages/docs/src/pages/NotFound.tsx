import { Link as RouterLink, useLocation } from 'react-router-dom';
import { BUTTON_EMPHASIS, Button, ICON_NAME, Icon, Link, TEXT_PRESET, Text } from '../ods';
import { MESSAGE_STATUS, Message, MessageBody, MessageIcon } from '../../../ods-react/src/components/message/src';
import { DocArticle } from '../doc/DocArticle';
import { openSearchPalette } from '../shell/Shell';

/* An address no route knows: a mistyped link, or a page that moved. Said so, with a way on, rather
   than a silent bounce to the homepage. */
const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <DocArticle>
      <div className="doc__not-found">
        <Message dismissible={ false } status={ MESSAGE_STATUS.warning }>
          <MessageIcon name={ ICON_NAME.triangleExclamation } />
          <MessageBody>
            No documentation page lives at <Text as="code" preset={ TEXT_PRESET.code }>{ pathname }</Text>: the link may be mistyped, or the page has moved.
          </MessageBody>
        </Message>

        <div className="doc__not-found-actions">
          <Button emphasis={ BUTTON_EMPHASIS.medium } onClick={ openSearchPalette }>
            <Icon name={ ICON_NAME.magnifyingGlass } /> Search the documentation
          </Button>
          <Link as={ RouterLink } to="/guides/get-started">Get Started</Link>
        </div>
      </div>
    </DocArticle>
  );
};

export { NotFound };

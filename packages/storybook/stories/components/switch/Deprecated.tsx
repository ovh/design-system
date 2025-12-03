import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import React from 'react';
import { StorybookLink } from '../../../src/components/storybookLink/StorybookLink';
import { REACT_COMPONENTS_TITLE, STORY } from '../../../src/constants/meta';

const Deprecated = () => (
  <Message
    color={ MESSAGE_COLOR.warning }
    dismissible={ false }
    style={{ width: '100%' }}>
    <MessageIcon name={ ICON_NAME.triangleExclamation } />

    <MessageBody>
      Component is now deprecated and will be removed in a future major release.
      You can use different components instead depending on your use-case:
      <ul>
        <li>managing navigation: move to <StorybookLink kind={ REACT_COMPONENTS_TITLE.tabs } story={ STORY.documentation }>Tabs</StorybookLink> using the switch variant.</li>
        <li>managing option activation: move to a <StorybookLink kind={ REACT_COMPONENTS_TITLE.buttonGroup } story={ STORY.documentation }>Button Group</StorybookLink>.</li>
        <li>as a form element: move to a <StorybookLink kind={ REACT_COMPONENTS_TITLE.radioGroup } story={ STORY.documentation }>Radio Group</StorybookLink>.</li>
      </ul>
    </MessageBody>
  </Message>
);

export {
  Deprecated,
};

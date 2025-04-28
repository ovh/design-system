import { ClipboardControl, ClipboardTrigger, Clipboard } from '../../src';

export default {
  component: Clipboard,
  title: 'Tests rendering',
};

export const render = () => (
  <Clipboard>
    <ClipboardControl value="My great value to copy" />
    <ClipboardTrigger data-testid="render-trigger" />
  </Clipboard>
);

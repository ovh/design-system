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

export const width = () => (
  <>
    <Clipboard data-testid="width-control">
      <ClipboardControl value="My great value to copy" />
      <ClipboardTrigger />
    </Clipboard>

    <Clipboard data-testid="width-trigger-only" value="My great value to copy">
      <ClipboardTrigger data-testid="width-trigger-only-trigger" />
    </Clipboard>
  </>
);

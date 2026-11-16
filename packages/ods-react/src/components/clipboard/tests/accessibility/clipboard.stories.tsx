import { Clipboard, ClipboardControl, ClipboardTrigger } from '../../src';

export default {
  component: Clipboard,
  title: 'Tests accessibility',
};

export const CopyStatus = () => (
  <Clipboard value="ssh-rsa AAAA">
    <ClipboardControl />
    <ClipboardTrigger
      data-testid="trigger"
      labelCopy="Copy the key"
      labelCopySuccess="Key copied" />
  </Clipboard>
);

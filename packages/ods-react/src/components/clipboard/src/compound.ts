import { type ClipboardProp, Clipboard as ClipboardRoot } from './components/clipboard/Clipboard';
import { ClipboardControl, type ClipboardControlProp } from './components/clipboard-control/ClipboardControl';
import { ClipboardTrigger, type ClipboardTriggerProp } from './components/clipboard-trigger/ClipboardTrigger';

const Clipboard = {
  Control: ClipboardControl,
  Root: ClipboardRoot,
  Trigger: ClipboardTrigger,
};

export { Clipboard };
export type { ClipboardProp, ClipboardControlProp, ClipboardTriggerProp };

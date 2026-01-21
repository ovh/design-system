import { type ClipboardProp, Clipboard as ClipboardRoot } from './components/clipboard/Clipboard';
import { ClipboardControl, type ClipboardControlProp } from './components/clipboard-control/ClipboardControl';
import { ClipboardTrigger, type ClipboardTriggerProp } from './components/clipboard-trigger/ClipboardTrigger';

const Clipboard = Object.assign(ClipboardRoot, {
  Control: ClipboardControl,
  Trigger: ClipboardTrigger,
});

export { Clipboard };
export { ClipboardControl, ClipboardTrigger };
export type { ClipboardProp, ClipboardControlProp, ClipboardTriggerProp };

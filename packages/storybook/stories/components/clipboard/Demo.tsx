import { Clipboard, ClipboardControl, type ClipboardControlProp, type ClipboardProp, ClipboardTrigger, type ClipboardTriggerProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = ClipboardProp & ClipboardControlProp & ClipboardTriggerProp & {
  masked?: boolean,
};

export default (prop: DemoProp) => (
  <Clipboard
    disabled={ prop.disabled }
    value={ prop.value }>
    <ClipboardControl
      loading={ prop.loading }
      maskOption={{ enable: !!prop.masked }} />

    <ClipboardTrigger
      labelCopy={ prop.labelCopy }
      labelCopySuccess={ prop.labelCopySuccess } />
  </Clipboard>
);

import { writeOnClipboard } from '@ovhcloud/ods-common-core';

class OdsClipboardController {
  async handlerClick(value: string): Promise<void> {
    await writeOnClipboard(value);
  }
}

export {
  OdsClipboardController,
};

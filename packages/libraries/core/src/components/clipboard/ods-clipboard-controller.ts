import { OdsClipboard } from './ods-clipboard';
import { OdsComponentController } from '../ods-component-controller';
import { writeOnClipboard } from '../../utils/clipboard/write-on-clipboard';

export class OdsClipboardController extends OdsComponentController<OdsClipboard> {

  constructor(component: OdsClipboard) {
    super(component);
  }

  async handlerClick(value: string): Promise<void> {
    await writeOnClipboard(value);
  }
}

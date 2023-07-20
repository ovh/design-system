import type { OsdsIcon } from '@ovhcloud/ods-component-icon';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { OdsButton } from '../button/ods-button';
import { OdsButtonSize } from '../button/ods-button-size';
import { OdsButtonVariant } from '../button/ods-button-variant';
import { OdsCode } from './ods-code';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for code component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCodeController extends OdsComponentController<OdsCode> {
  private readonly logger = new OdsLogger('OdsCodeController');
  protected buttonSize = OdsButtonSize.sm;
  protected iconSize = ODS_ICON_SIZE.xs;

  constructor(component: OdsCode) {
    super(component);
  }

  /**
   * Autocomplete the given content.
   * Detect if there is an ods-button in `copy` slot and set up `size` and `contrasted` attribute of it.
   * Set up `ghost` variant of button if not specified (default one applied on `code` component).
   * Detect if there is an `ods-icon` inside the `ods-button` and set the `size` and `contrasted` attributes.
   * Set up `copy` icon if there is no one specified.
   * Warn user when the `size` property will be overridden on `ods-button` or `ods-icon`.
   * @param button
   * @param icon
   */
  autocompleteCopySlot(button: (HTMLSlotElement & OdsButton), icon: (HTMLElement & OsdsIcon) | null): void {
    const buttonSize = button.getAttribute('size');
    if (buttonSize && buttonSize !== this.buttonSize) {
      this.logger.warn('size on copy slot will be overridden with sm');
    }
    this.setCopyButtonAttributes(button);
    if (icon) {
      const iconSize = icon.getAttribute('size');
      if (iconSize && iconSize !== this.iconSize) {
        this.logger.warn('size on icon component will be overridden with xs');
      }
      this.setCopyIconAttributes(icon);
    } else {
      this.createCopyIcon(button);
    }
  }

  /**
   * find the text that is set up inside the `slot` and copy it into the clipboard,
   * then emit the `copied` event.
   */
  copyCode(): void {
    const slot = this.component.codeEl.querySelector('slot') as HTMLSlotElement;
    const text = slot?.assignedNodes().map(n => n.textContent).join('').trim();

    navigator.clipboard.writeText(text);
    this.component.emitCopy();
    this.logger.log('Code has been copied into clipboard');
  }

  private createCopyIcon(button: (HTMLSlotElement & OdsButton)) {
    const icon = this.component.createCopyIconElement() as (HTMLElement & OsdsIcon);
    icon[ 'name' ] = ODS_ICON_NAME.COPY;
    this.setCopyIconAttributes(icon);
    button.appendChild(icon);
  }

  private setCopyButtonAttributes(button: (HTMLSlotElement & OdsButton)) {
    button[ 'size' ] = this.buttonSize;
    button[ 'variant' ] = button.getAttribute('variant') as OdsButtonVariant || OdsButtonVariant.ghost;
    button[ 'contrasted' ] = !this.component.contrasted;
  }

  private setCopyIconAttributes(icon: (HTMLElement & OsdsIcon)) {
    icon[ 'size' ] = this.iconSize;
    icon[ 'contrasted' ] = !this.component.contrasted;
  }
}

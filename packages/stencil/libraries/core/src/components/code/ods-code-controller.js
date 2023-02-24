import { OdsIconName, OdsIconSize } from '../icon/ods-icon-size';
import { OdsButtonSize } from '../button/ods-button-size';
import { OdsButtonVariant } from '../button/ods-button-variant';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
/**
 * common controller logic for code component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCodeController extends OdsComponentController {
  constructor(component) {
    super(component);
    this.logger = new OdsLogger('OdsCodeController');
    this.buttonSize = OdsButtonSize.sm;
    this.iconSize = OdsIconSize.xs;
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
  autocompleteCopySlot(button, icon) {
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
    }
    else {
      this.createCopyIcon(button);
    }
  }
  /**
   * find the text that is set up inside the `slot` and copy it into the clipboard,
   * then emit the `copied` event.
   */
  copyCode() {
    const slot = this.component.codeEl.querySelector('slot');
    const text = slot === null || slot === void 0 ? void 0 : slot.assignedNodes().map(n => n.textContent).join('').trim();
    navigator.clipboard.writeText(text);
    this.component.emitCopy();
    this.logger.log('Code has been copied into clipboard');
  }
  createCopyIcon(button) {
    const icon = this.component.createCopyIconElement();
    icon['name'] = OdsIconName.COPY;
    this.setCopyIconAttributes(icon);
    button.appendChild(icon);
  }
  setCopyButtonAttributes(button) {
    button['size'] = this.buttonSize;
    button['variant'] = button.getAttribute('variant') || OdsButtonVariant.ghost;
    button['contrasted'] = !this.component.contrasted;
  }
  setCopyIconAttributes(icon) {
    icon['size'] = this.iconSize;
    icon['contrasted'] = !this.component.contrasted;
  }
}

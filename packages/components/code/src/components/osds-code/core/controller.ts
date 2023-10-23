import type {OsdsButton} from '@ovhcloud/ods-component-button';
import type {OsdsIcon} from '@ovhcloud/ods-component-icon';
import type {OsdsCode} from '../osds-code';
import {ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT} from '@ovhcloud/ods-component-button';
import {ODS_ICON_NAME, ODS_ICON_SIZE} from '@ovhcloud/ods-component-icon';
import {OdsLogger} from '@ovhcloud/ods-common-core';

/**
 * common controller logic for code component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsCodeController {
  private readonly logger = new OdsLogger('OdsCodeController');
  protected buttonSize = ODS_BUTTON_SIZE.sm;
  protected iconSize = ODS_ICON_SIZE.xs;
  private component: OsdsCode;

  constructor(component: OsdsCode) {
    this.component = component;
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
  autocompleteCopySlot(button: (HTMLSlotElement & OsdsButton), icon: (HTMLElement & OsdsIcon) | null): void {
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
    const text = slot?.assignedNodes().map((n) => n.textContent).join('').trim();

    navigator.clipboard.writeText(text);
    this.component.emitCopy();
    this.logger.log('Code has been copied into clipboard');
  }

  private createCopyIcon(button: (HTMLSlotElement & OsdsButton)) {
    const icon = this.component.createCopyIconElement() as (HTMLElement & OsdsIcon);
    icon[ 'name' ] = ODS_ICON_NAME.COPY;
    this.setCopyIconAttributes(icon);
    button.appendChild(icon);
  }

  private setCopyButtonAttributes(button: (HTMLSlotElement & OsdsButton)) {
    button[ 'size' ] = this.buttonSize;
    button[ 'variant' ] = button.getAttribute('variant') as ODS_BUTTON_VARIANT || ODS_BUTTON_VARIANT.ghost;
    button[ 'contrasted' ] = !this.component.contrasted;
  }

  private setCopyIconAttributes(icon: (HTMLElement & OsdsIcon)) {
    icon[ 'size' ] = this.iconSize;
    icon[ 'contrasted' ] = !this.component.contrasted;
  }
}

export {
  OdsCodeController,
};

import type { OsdsButton } from '../osds-button';

import { OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_BUTTON_SIZE } from '../constants/button-size';
import { ODS_BUTTON_TEXT_ALIGN } from '../constants/button-text-align';
import { ODS_BUTTON_VARIANT } from '../constants/button-variant';

/**
 * common controller logic for button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsButtonController {
  private component: OsdsButton;

  constructor(component: OsdsButton) {
    this.component = component;
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsButton>({
      attribute: this.component.color,
      attributeName: 'color',
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
    });
    OdsWarnComponentAttribute<ODS_BUTTON_SIZE, OsdsButton>({
      attribute: this.component.size,
      attributeName: 'size',
      attributeValues: ODS_BUTTON_SIZE as Record<string, unknown>,
    });
    OdsWarnComponentAttribute<ODS_BUTTON_VARIANT, OsdsButton>({
      attribute: this.component.variant,
      attributeName: 'variant',
      attributeValues: ODS_BUTTON_VARIANT as Record<string, unknown>,
    });
    OdsWarnComponentAttribute<ODS_BUTTON_TEXT_ALIGN, OsdsButton>({
      attribute: this.component.textAlign,
      attributeName: 'textAlign',
      attributeValues: ODS_BUTTON_TEXT_ALIGN as Record<string, unknown>,
    });
  }

  /**
   * Mutate the component attributes depending on the button shape
   */
  mutateAttributes(): void {
    if(this.component.circle) {
      this.component.inline = true;
    }
  }

  /**
   * Handle Click and KeyPress Event on the button
   */
  handleClick(event: MouseEvent): void {
    this.submitForm(event);
  }

  handleKey(event: KeyboardEvent): void {
    if(event.key === ' ' || event.key === 'Enter') {
      this.component.buttonEl?.click();
    }
  }

  /**
   * Checking if the button is in a form to add the form submit behaviour on it
   */
  private submitForm(event: MouseEvent | KeyboardEvent) {
    if (this.component.type && ['submit', 'reset'].includes(this.component.type) && !this.component.disabled) {
      const form = event.composedPath().find((el) => (el as HTMLElement).tagName === 'FORM') as HTMLElement;
      if (form) {
        event.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.component.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }
}

export {
  OdsButtonController,
};

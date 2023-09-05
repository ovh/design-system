import type { OsdsButton } from '../osds-button';
import { OdsLogger, OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE } from '../constants/button-size';
import { ODS_BUTTON_VARIANT } from '../constants/button-variant';

/**
 * common controller logic for button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsButtonController {
  private readonly logger = new OdsLogger('OdsButtonControler');
  private component: OsdsButton;

  constructor(component: OsdsButton) {
    this.component = component;
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsButton>({
      logger,
      attributeValues: ODS_THEME_COLOR_INTENT as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<ODS_BUTTON_SIZE, OsdsButton>({
      logger,
      attributeValues: ODS_BUTTON_SIZE as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute<ODS_BUTTON_VARIANT, OsdsButton>({
      logger,
      attributeValues: ODS_BUTTON_VARIANT as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }

  /**
   * Mutate the component attributes depending on the button shape
   */
  mutateAttributes(): void {
    if(this.component.circle) {
      this.component.variant = ODS_BUTTON_VARIANT.ghost;
      this.component.inline = true;
    }
  }

  /**
   * Handle Click and KeyPress Event on the button
   */
  handleClick(event: MouseEvent): void {
    this.logger.log('Click on osds-button');
    this.submitForm(event);
  }

  handleKey(event: KeyboardEvent): void {
    if(event.key === " " || event.key === "Enter") {
      this.logger.log('Key on osds-button');
      this.submitForm(event);
    }
  }

  /**
   * Checking if the button is in a form to add the form submit behaviour on it
   */
  private submitForm(event: MouseEvent | KeyboardEvent) {
    if (this.component.type && this.component.type === "submit" && !this.component.disabled) {
      const form = (event.target as HTMLElement).closest("form");
      if (form) {
        event.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = 'submit';
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

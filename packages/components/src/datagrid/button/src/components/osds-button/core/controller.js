import { OdsLogger, OdsWarnComponentAttribute } from "@ovhcloud/ods-common-core";
import { ODS_THEME_COLOR_INTENT } from "@ovhcloud/ods-common-theming";
import { ODS_BUTTON_SIZE } from "../constants/button-size";
import { ODS_BUTTON_TEXT_ALIGN } from "../constants/button-text-align";
import { ODS_BUTTON_VARIANT } from "../constants/button-variant";
/**
 * common controller logic for button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsButtonController {
  constructor(component) {
    this.logger = new OdsLogger('OdsButtonControler');
    this.component = component;
  }
  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes() {
    const logger = this.logger;
    OdsWarnComponentAttribute({
      logger,
      attributeValues: ODS_THEME_COLOR_INTENT,
      attributeName: 'color',
      attribute: this.component.color,
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: ODS_BUTTON_SIZE,
      attributeName: 'size',
      attribute: this.component.size,
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: ODS_BUTTON_VARIANT,
      attributeName: 'variant',
      attribute: this.component.variant,
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: ODS_BUTTON_TEXT_ALIGN,
      attributeName: 'textAlign',
      attribute: this.component.textAlign,
    });
  }
  /**
   * Mutate the component attributes depending on the button shape
   */
  mutateAttributes() {
    if (this.component.circle) {
      this.component.inline = true;
    }
  }
  /**
   * Handle Click and KeyPress Event on the button
   */
  handleClick(event) {
    this.logger.log('Click on osds-button');
    this.submitForm(event);
  }
  handleKey(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.logger.log('Key on osds-button');
      this.submitForm(event);
    }
  }
  /**
   * Checking if the button is in a form to add the form submit behaviour on it
   */
  submitForm(event) {
    if (this.component.type && this.component.type === 'submit' && !this.component.disabled) {
      const form = event.target.closest('form');
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
export { OdsButtonController, };

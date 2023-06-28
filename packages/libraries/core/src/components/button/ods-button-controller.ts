import { OdsButton } from './ods-button';
import { OdsButtonSize } from './ods-button-size';
import { OdsButtonVariant } from './ods-button-variant';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for button component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsButtonController extends OdsComponentController<OdsButton> {
  private readonly logger = new OdsLogger('OdsButtonControler');

  constructor(component: OdsButton) {
    super(component);
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsButton>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<OdsButtonSize, OdsButton>({
      logger,
      attributeValues: OdsButtonSize as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute<OdsButtonVariant, OdsButton>({
      logger,
      attributeValues: OdsButtonVariant as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }

  /**
   * Mutate the component attributes depending on the button shape
   */
  mutateAttributes(): void {
    if(this.component.circle) {
      this.component.variant = OdsButtonVariant.ghost;
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
    if (this.component.type && this.component.type === "submit") {
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

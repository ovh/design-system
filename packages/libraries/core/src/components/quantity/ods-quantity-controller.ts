import { OdsComponentController } from '../ods-component-controller';
import { OdsInput } from '../input/ods-input';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsQuantity } from './ods-quantity';

/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsQuantityController extends OdsComponentController<OdsQuantity> {

  private readonly logger = new OdsLogger('OsdsQuantityController');

  constructor(component: OdsQuantity) {
    super(component);
  }

  initInput(): void {
    const foundOsdsInput = this.component.el.querySelector('osds-input[type=number]') as (OdsInput & HTMLElement);
    this.clearEventListeners();
    if (!foundOsdsInput) {
      const foundNativeInput = this.component.el.querySelector('input[type=number]') as (OdsInput & HTMLElement);
      if (foundNativeInput) {
        this.component.input = foundNativeInput;
        this.component.input.addEventListener('change', this.processInputValueChange.bind(this));
        this.component.input.addEventListener('blur', this.onBlur.bind(this));
      } else {
        this.logger.warn('An input of type number is mandatory.');
      }
    } else {
      this.component.input = foundOsdsInput;
      this.component.input.addEventListener('odsInputBlur', this.onBlur.bind(this));
    }
  }

  private onBlur() {
    if (this.component.input && this.component.input.max && this.component.input.min) {
      const valueAsNb = Number(this.component.input.value);
      const minNb = Number(this.component.input.min);
      const maxNb = Number(this.component.input.max);

      if (!isNaN(valueAsNb)) {
        this.component.input.value = `${Math.max(minNb, Math.min(maxNb, valueAsNb))}`;
      }
    }
  }

  processInputValueChange(): void {
    if (this.component.input && this.component.minus && this.component.plus) {
      if (this.component.input.value && this.component.input.min && this.component.input.max) {
        const valueAsNb = Number(this.component.input.value);
        const minNb = Number(this.component.input.min);
        const maxNb = Number(this.component.input.max);

        this.removeDisabled(this.component.minus, this.component.plus);

        if (!isNaN(valueAsNb)) {
          if (valueAsNb <= minNb) {
            this.setDisabled(this.component.minus);
          } else if (valueAsNb >= maxNb) {
            this.setDisabled(this.component.plus);
          }
        }
      }
    }
  }

  setDisabledOnChildren(disabled: boolean) {
    this.logger.log('disabled changed. update child', { disabled });
    if (this.component.minus && this.component.plus && this.component.input) {
      if (disabled) {
        this.setDisabled(this.component.minus, this.component.plus, this.component.input);
      } else {
        this.removeDisabled(this.component.minus, this.component.plus, this.component.input);
        this.processInputValueChange();
      }
    }
  }

  clearEventListeners(): void {
    this.component.input?.removeEventListener('change', this.processInputValueChange);
    this.component.input?.removeEventListener('blur', this.onBlur);
    this.component.input?.removeEventListener('odsInputBlur', this.onBlur);
  }

  minusClickHandler(): void {
    if (this.component.input && !this.component.disabled) {
      this.component.input.stepDown();
      this.processInputValueChange();
    }
  }

  plusClickHandler(): void {
    if (this.component.input && !this.component.disabled) {
      this.component.input.stepUp();
      this.processInputValueChange();
    }
  }

  initSlots(): void {
    const minus = this.component.el.querySelector('[slot=minus]') as HTMLSlotElement;
    const plus = this.component.el.querySelector('[slot=plus]') as HTMLSlotElement;

    if (minus && plus) {
      this.component.minus = minus;
      this.component.plus = plus;
    } else {
      this.logger.warn('Minus and plus control are mandatory.');
    }
  }


  private setDisabled(...elements: HTMLElement[]): void {
    elements.forEach(el => el.setAttribute('disabled', ''));
  }

  private removeDisabled(...elements: HTMLElement[]): void {
    elements.forEach(el => el.removeAttribute('disabled'));
  }
}

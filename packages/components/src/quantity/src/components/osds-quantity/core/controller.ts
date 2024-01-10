import type { OsdsInput } from '../../../../../input/src';

class OdsQuantityController {
  private component: OsdsQuantity;

  constructor(component: OsdsQuantity) {
    this.component = component;
  }

  initInput(): void {
    const foundOsdsInput = this.component.el.querySelector('osds-input[type=number]') as (OsdsInput & HTMLElement);
    this.clearEventListeners();
    if (foundOsdsInput) {
      this.component.input = foundOsdsInput;
      this.component.input.addEventListener('odsBlur', this.onBlur.bind(this));
    } else {
      const foundNativeInput = this.component.el.querySelector('input[type=number]') as (OsdsInput & HTMLElement);
      if (foundNativeInput) {
        this.component.input = foundNativeInput;
        this.component.input.addEventListener('change', this.processInputValueChange.bind(this));
        this.component.input.addEventListener('blur', this.onBlur.bind(this));
      } else {
        console.warn('An input of type number is mandatory.');
      }
    }
  }

  private onBlur(): void {
    if (this.component.input) {
      const valueAsNb = Number(this.component.input.value);
      const minNb = Number(this.component.input.min);
      const maxNb = Number(this.component.input.max);
      const stepNb = Number(this.component.input.step);
      let valueToCheck = valueAsNb;

      if (stepNb && !Number.isInteger((valueAsNb - minNb) / stepNb)) {
        valueToCheck = Math.floor( (valueAsNb - minNb) / stepNb) * stepNb + minNb;
      }

      if (this.component.input.min !== '' && valueToCheck < minNb) {
        this.component.input.value = minNb;
      } else if (this.component.input.max !== '' && valueToCheck > maxNb) {
        this.component.input.value = maxNb;
      } else if (valueToCheck !== valueAsNb) {
        this.component.input.value = valueToCheck;
      }
    }
  }

  processInputValueChange(): void {
    if (this.component.input && this.component.minus && this.component.plus) {
      const valueAsNb = Number(this.component.input.value);
      const minNb = Number(this.component.input.min);
      const maxNb = Number(this.component.input.max);

      if (this.component.input.value !== '') {
        this.removeDisabled(this.component.minus, this.component.plus);

        if (this.component.input.min !== '' && valueAsNb <= minNb) {
          this.setDisabled(this.component.minus);
        } else if (this.component.input.max !== '' && valueAsNb >= maxNb) {
          this.setDisabled(this.component.plus);
        }
      }
    }
  }

  setDisabledOnChildren(disabled: boolean): void {
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
    this.component.input?.removeEventListener('odsBlur', this.onBlur);
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
      console.warn('Minus and plus control are mandatory.');
    }
  }

  private setDisabled(...elements: HTMLElement[]): void {
    elements.forEach((el) => el.setAttribute('disabled', ''));
  }

  private removeDisabled(...elements: HTMLElement[]): void {
    elements.forEach((el) => el.removeAttribute('disabled'));
  }
}

export {
  OdsQuantityController,
};

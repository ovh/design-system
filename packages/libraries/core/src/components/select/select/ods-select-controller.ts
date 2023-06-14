import { OdsComponentController } from '../../ods-component-controller';
import { OdsSelectValidityState } from './ods-select-validity-state';
import { OdsSelect } from './ods-select';
import { OdsSelectOption, OdsSelectOptionClickEventDetail } from '../public-api';

/**
 * common controller logic for select component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSelectController extends OdsComponentController<OdsSelect> {

  constructor(component: OdsSelect) {
    super(component);
  }

  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla select.
   * in case of no vanilla select passed, it returns the default value for each property
   */
  getValidity(): OdsSelectValidityState {
    const requiredError = this.hasRequiredError();
    return {
      valid: !requiredError,
      invalid: requiredError,
      forbiddenValue: false,
      valueMissing: requiredError,
      stepMismatch: false,
      customError: false,
    };
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin({ bottom: 0 });
    }
  }

  /**
   * Method to close the surface
   */
  closeSurface(): void {
    if (this.component.surface?.opened) {
      this.component.surface.close();
      this.component.opened = false;
    }
  }

  /**
   * Method to open the surface
   */
  openSurface(): void {
    if (this.component.surface) {
      this.component.surface.open();
      this.component.opened = true;
    }
  }

  /**
   * if the value of the component is required:
   * it returns true if the value is undefined.
   * it returns false if the value is set.
   */
  hasRequiredError(): boolean {
    if (this.component.required) {
      return !this.component.value;
    }
    return false;
  }

  handlerKeyDown(event: KeyboardEvent): void {
    const isEnter = event.code.includes('Enter');
    const isEscape = event.code.includes('Escape');
    const isArrowDownOrUp = event.code === 'ArrowUp' || event.code === 'ArrowDown';
    if (!isEnter && !isArrowDownOrUp && !isEscape) {
      return;
    }
    if (isEscape) {
      return this.closeSurface();
    }
    const selectOptions = this.getSelectOptionList();
    const selectedSelectOptionIndex = selectOptions.findIndex((select) => select.selected || document.activeElement === select);
    if (isEnter) {
      return this.handlerKeyEnter(selectOptions[selectedSelectOptionIndex]);
    }

    if (isArrowDownOrUp) {
      return this.handlerKeyArrow(event, selectOptions, selectedSelectOptionIndex);    
    }
  }

  private handlerKeyArrow(event: KeyboardEvent, selectOptions: (HTMLElement & OdsSelectOption)[], selectedSelectOptionIndex: number): void {
    const focusSelectOption = (index: number) => {
      selectOptions[index].focus();
      selectOptions[index].setAttribute('selected', '');
    }
    const hasSelectedOption = selectedSelectOptionIndex !== -1;
    if (hasSelectedOption) {
      selectOptions[selectedSelectOptionIndex].removeAttribute('selected');
      selectOptions[selectedSelectOptionIndex].blur();
    }
    if (event.code === 'ArrowUp') {
      const index = hasSelectedOption ? selectedSelectOptionIndex - 1 : 0;
      if (index < 0) {
        this.component.setFocus();
        return;
      }
      return focusSelectOption(index);
    }
    if (event.code === 'ArrowDown') {
      const index = hasSelectedOption ? selectedSelectOptionIndex + 1 : 0;
      if (index >= selectOptions.length) {
        return;
      }
      return focusSelectOption(index);
    }
  }

  private handlerKeyEnter(selectOption: OdsSelectOption): void {
    if (!this.component.opened) {
      return this.component.handleSelectClick();
    }
    return this.component.handleValueChange(new CustomEvent<OdsSelectOptionClickEventDetail>('odsSelectOptionClick', {
      detail: {
        value: selectOption?.value || null,
      }
    }));
  }
  
  getSelectOptionList(): (HTMLElement & OdsSelectOption)[] {
    return Array.from(this.component.el.querySelectorAll<OdsSelectOption & HTMLElement>('osds-select-option'));
  }
}

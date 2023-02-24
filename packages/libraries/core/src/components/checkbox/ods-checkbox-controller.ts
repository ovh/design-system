import { OdsComponentController } from '../ods-component-controller';
import { OdsCheckbox } from './ods-checkbox';
import { OdsLogger } from '../../logger/ods-logger';

/**
 * common controller logic for checkbox component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsCheckboxController extends OdsComponentController<OdsCheckbox> {
  private readonly logger = new OdsLogger('OdsCheckboxController');

  constructor(component: OdsCheckbox) {
    super(component);
    console.log('OdsCheckboxController');
  }

  /**
   * detect the element to works with the checkbox and warn if not found.
   * the child component will have a disabled tabindex in order to let the checkbox controls the tabindex himself.
   * init propagation of `checked` and `disabled` attributes from the parent `checkbox` to the child (tile, toggle, checkbox-button).
   */
  afterInit(): void {
    if (this.component.checkboxableComponent) {
      // this checkbox manage itself the focus instead of the child
      this.component.checkboxableComponent.setAttribute('tabindex', '-1');
    } else {
      this.logger.warn(`you must place a checkboxable element inside the checkbox component.
          (html input checkbox or any html component that accepts checked attribute)`)
    }

    this.component.propagateCheckedToChild(this.component.checked);
    this.component.propagateDisabledToChild(this.component.disabled);
  }

  /**
   * get the current tab index.
   * when component is disabled, the returned tab index is `-1` in order to disable it
   */
  getTabIndex(): number {
    if (!this.component.disabled) {
      return this.component.tabindex;
    }
    return -1;
  }

  async handleToggleByClick(event: MouseEvent): Promise<void> {
    this.logger.log(`[checkbox=${this.component.value}]`, 'click event', { event });
    event.preventDefault();
    await this.toggleCheck();
  }

  async handleToggleByKeyEvent(event: KeyboardEvent): Promise<void> {
    this.logger.log(`[checkbox=${this.component.value}]`, 'key event', { event });
    if (event.code === 'Space' || event.code.includes('Enter')) {
      await this.toggleCheck();
    }
  }

  /**
   * on blurring, and if the component is not disabled, it will process the blur
   * by removing `hasFocus` state and emitting the event
   */
  onBlur(): void {
    if (!this.component.disabled) {
      this.component.hasFocus = false;
      this.component.emitBlur();
    }
  }

  /**
   * on focusing the component, it will process the internal focus.
   */
  onFocus(): void {
    this.setFocus();
  }

  /**
   * propagate `checked` attribute update from the parent `checkbox` to the child (tile, toggle, checkbox-button)
   */
  propagateCheckedToChild(checked: boolean): void {
    this.propagateAttributeToChild({ name: 'checked', value: checked });
  }

  /**
   * propagate `disabled` attribute update from the parent `checkbox` to the child (tile, toggle, checkbox-button)
   */
  propagateDisabledToChild(disabled: boolean): void {
    this.propagateAttributeToChild({ name: 'disabled', value: disabled });
  }

  /**
   * propagate `hasFocus` attribute update from the parent `checkbox` to the child (tile, toggle, checkbox-button)
   */
  propagateHasFocusToChild(hasFocus: boolean): void {
    this.propagateAttributeToChild({ name: 'has-focus', value: hasFocus });
  }

  /**
   * set the focus on the component.
   * it focuses the input in fact and emit the event
   */
  setFocus(): void {
    if (this.component.inputEl && !this.component.disabled) {
      this.component.inputEl.focus();
      this.component.hasFocus = true;
      this.component.emitFocus();
    }
  }

  /**
   * set a new tabindex
   * @param index - index number
   */
  setTabindex(index: number): void {
    this.component.tabindex = index;
  }

  async toggleCheck(): Promise<void> {
    if (!this.component.disabled) {
      if (this.component.save) {
        this.logger.log(`[checkbox=${this.component.value}]`, 'pessimistic update');
        try {
          await this.beforePessimisticToggle();
          this.component.checked = !this.component.checked;
        } catch (e) {
          this.logger.error(`[checkbox=${this.component.value}]`, 'calling save failed');
        } finally {
          await this.afterPessimisticToggle();
        }
      } else {
        this.logger.log(`[checkbox=${this.component.value}]`, 'optimistic update');
        this.component.checked = !this.component.checked;
      }
      this.component.emitChecked();
    }
  }

  /**
   * process all the necessary for a pessimistic update after had toggled it.
   * it updates the `updating` status and process `afterSave` option
   */
  private async afterPessimisticToggle(): Promise<void> {
    this.component.updating = false;
    this.component.emitUpdating();
    try {
      this.component.afterSave && await this.component.afterSave({
        checked: this.component.checked,
        value: this.component.value
      });
    } catch (e) {
      this.logger.error(`[checkbox=${this.component.value}]`, 'calling afterSave failed');
    }
  }

  /**
   * process all the necessary for a pessimistic update before toggle it.
   * it updates the `updating` status, process `beforeSave` option and then call the `save` one.
   */
  private async beforePessimisticToggle(): Promise<void> {
    this.logger.log(`[checkbox=${this.component.value}]`, 'calling save');
    this.component.updating = true;
    this.component.emitUpdating();
    this.component.beforeSave && await this.component.beforeSave({
      checked: this.component.checked,
      value: this.component.value
    });
    this.component.save && await this.component.save({ checked: this.component.checked, value: this.component.value });
    this.logger.log(`[checkbox=${this.component.value}]`, 'calling save done');
  }

  private propagateAttributeToChild({ name, value }: { name: 'disabled' | 'checked' | 'has-focus', value: boolean }) {
    this.logger.log(`[checkbox=${this.component.value}]`, `${name} changed. update child`, { value });
    if (this.component.checkboxableComponent) {
      if (value) {
        this.component.checkboxableComponent.setAttribute(name, '');
      } else {
        this.component.checkboxableComponent.removeAttribute(name);
      }
    }
  }
}

import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsRadio } from './ods-radio';
import { OdsRadioizable } from '../../utils/radio/ods-radioizable';
import { OdsRadioGroup } from '../public-api';

/**
 * common controller logic for radio component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsRadioController extends OdsComponentController<OdsRadio> {
  private readonly logger = new OdsLogger('OdsRadioController');
  constructor(component: OdsRadio) {
    super(component);
  }

  onFocus(): void {
    this.component.emitFocus();
  }

  onBlur(): void {
    this.component.emitBlur();
  }

  setButtonTabindex(value: number): void {
    this.component.buttonTabindex = this.component.disabled ? -1 : value;
  }

  updateDisabledOnChild(disabled: boolean): void {
    this.logger.log(`[radio=${this.component.value}]`, 'disabled changed. update child', { disabled });
    if (this.component.radioizedComponent) {
      if (disabled) {
        this.component.radioizedComponent.setAttribute('disabled', '');
      } else {
        this.component.radioizedComponent.removeAttribute('disabled');
      }
    }
  }

  updateCheckingOnChild(checking: boolean): void {
    this.logger.log(`[radio=${this.component.value}]`, 'checking changed. update child', { checking });
    if (this.component.radioizedComponent) {
      if (checking) {
        this.component.radioizedComponent.setAttribute('checking', '');
      } else {
        this.component.radioizedComponent.removeAttribute('checking');
      }
    }
  }

  updateCheckOnChild(checked: boolean): void {
    this.logger.log(`[radio=${this.component.value}]`, 'checked changed. update child', { checked });
    if (this.component.radioizedComponent) {
      if (checked) {
        this.component.radioizedComponent.setAttribute('checked', '');
      } else {
        this.component.radioizedComponent.removeAttribute('checked');
      }
    }
  }

  /**
   *
   * @param value
   */
  watchValue(value: string): void {
    this.logger.log(`[radio=${this.component.value}]`, 'value changed', { value });
  }

  /**
   *
   */
  beforeInit(): void {
    this.logger.log(`[radio=${this.component.value}]`, 'connectedCallback');
    this.updateCheckOnChild(this.component.checked);
    this.updateDisabledOnChild(this.component.disabled);
    const radioGroup = this.component.radioGroup = this.closestPassShadow(this.component.el, 'osds-radio-group');
    if (radioGroup) {
      radioGroup.registerRadio((this.component.el as unknown as (HTMLElement & OdsRadio)));
      this.updateState();
      radioGroup.addEventListener('odsDisabledChange', (() => this.updateState()));
      radioGroup.addEventListener('odsValueChange', (() => this.updateState()));
    }
  }

  closestPassShadow(node: Node | ParentNode | null, selector: string): HTMLElement & OdsRadioGroup | null {
    if (!node) {
        return null;
    }

    if (node instanceof ShadowRoot) {
        return this.closestPassShadow(node.host, selector);
    }

    if (node instanceof HTMLElement) {
        if (node.matches(selector)) {
            return node as HTMLElement & OdsRadioGroup;
        }
        if (node.assignedSlot) {
          return this.closestPassShadow(node.assignedSlot.parentElement, selector);
        }
        return this.closestPassShadow(node.parentNode, selector);
    }
    return this.closestPassShadow(node.parentNode, selector);
}

  /**
   *
   */
  afterInit(): void {
    this.component.radioizedComponent = (this.component.el.firstElementChild as unknown) as (HTMLElement & OdsRadioizable);
    if (!this.component.radioizedComponent) {
      this.logger.warn(`[radio=${this.component.value}]`, 'you must place a radioizable element inside the radio component')
    } else {
      this.updateCheckOnChild(this.component.checked);
      this.updateDisabledOnChild(this.component.disabled);
    }
  }

  /**
   *
   */
  onDestroy(): void {
    const radioGroup = this.component.radioGroup;
    if (radioGroup) {
      radioGroup.unregisterRadio((this.component.el as unknown as (HTMLElement & OdsRadio)));
      radioGroup.removeEventListener('odsDisabledChange', (() => this.updateState()));
      radioGroup.removeEventListener('odsValueChange', (() => this.updateState()));
      this.component.radioGroup = null;
    }
  }

  /**
   *
   * @param checking
   */
  updateState(checking?: boolean): void {
    if (this.component.radioGroup) {
      this.logger.log(`[radio=${this.component.value}]`, 'updateState', this.component.radioGroup.value, this.component.value);
      this.component.checked = (this.component.radioGroup.value !== undefined && this.component.value !== undefined) ? this.component.radioGroup.value === this.component.value : false;
      if (this.component.checked) {
        this.component.checking = false;
      }
      if (checking === false || checking) {
        this.component.checking = checking;
      }
      this.component.disabled = this.component.radioGroup.disabled;
    }
  }

  /**
   *
   * @param event
   */
  async handleLabelClick(event: MouseEvent) {
    this.logger.log(`[radio=${this.component.value}]`, 'click');
    event.preventDefault();
    await this.handleLabelEvent();
  }

  /**
   *
   * @param event
   */
  async handleLabelKeyEvent(event: KeyboardEvent) {
    this.logger.log(`[radio=${this.component.value}]`, 'key event', { event });
    if (event.code === 'Space' || event.code.includes('Enter')) {
      await this.handleLabelEvent();
    }
  }

  private async onComponentSave(): Promise<void> {
    this.logger.log(`[radio=${this.component.value}]`, 'pessimistic update');
    try {
      this.logger.log(`[radio=${this.component.value}]`, 'calling save');
      this.component.checking = true;
      this.component.emitChecking();
      this.component.beforeSave && await this.component.beforeSave({ checked: this.component.checked, value: this.component.value });
      this.component.save && await this.component.save({ checked: this.component.checked, value: this.component.value });
      this.logger.log(`[radio=${this.component.value}]`, 'calling save done');
      this.component.checked = true;
    } catch (e) {
      this.logger.log(`[radio=${this.component.value}]`, 'calling save failed');
      this.component.checked = false;
    } finally {
      this.component.checking = false;
      this.component.emitChecking();
      this.component.afterSave && await this.component.afterSave({ checked: this.component.checked, value: this.component.value });
    }
  }

  private onRadioGroupSave(): void {
    this.logger.log(`[radio=${this.component.value}]`, 'pessimistic update led by radio-group');
    this.component.checking = true;
    this.component.emitChecking();
  }

  private async handleLabelEvent() {
    if (!this.component.disabled && !this.component.checked) {
      if (this.component.save) {
        await this.onComponentSave();
      } else {
        if (this.component.radioGroup?.save) {
          this.onRadioGroupSave();
        } else {
          this.logger.log(`[radio=${this.component.value}]`, 'optimistic update');
          this.component.checked = true;
        }
      }
      this.component.emitChecked();
    }
  }
}

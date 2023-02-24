import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from './../../logger/ods-logger';
import { OdsRadio } from '../radio/ods-radio';
import { OdsRadioCheckedChangeEvent } from './ods-radio-checked-change-event';
import { OdsRadioCheckingChangeEvent } from './ods-radio-checking-change-event';
import { OdsRadioGroup } from './ods-radio-group';

/**
 * common controller logic for radio-group component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsRadioGroupController extends OdsComponentController<OdsRadioGroup> {
  private readonly logger = new OdsLogger('OdsRadioGroupController');

  constructor(component: OdsRadioGroup) {
    super(component);
  }

  private updateRadioStates(checking?: boolean): void {
    if (this.component.radios) {
      this.component.radios.forEach((radio) => {
        radio.updateState(checking);
      });
    }
  }

  private async updateCheckingState(event: OdsRadioCheckingChangeEvent) {
    if (event.detail.checking) {
      const newValue = event.detail.value;
      await this.updateState({ newValue, checked: false, checking: true });
    }
  }

  private async updateCheckedState(event: OdsRadioCheckedChangeEvent) {
    if (event.detail.checked) {
      const newValue = event.detail.value;
      await this.updateState({ newValue, checked: true, checking: false });
    }
  }

  private changeValue(value: string) {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'new value', { value });
    const previousValue = this.component.value;
    this.component.value = value;
    this.component.emitChange(value, previousValue);
  }

  async updateState({ newValue, checked, checking }: { newValue: string, checked: boolean, checking: boolean }) {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'updateState', { checked, checking });
    if (this.component.save) {
      this.logger.log(`[radio-group=${this.component.inputId}]`, 'pessimistic update');
      try {
        this.logger.log(`[radio-group=${this.component.inputId}]`, 'calling save');
        this.updateRadioStates();
        this.component.beforeSave && await this.component.beforeSave({ value: this.component.value });
        await this.component.save({ value: this.component.value });
        this.logger.log(`[radio-group=${this.component.inputId}]`, 'calling save done');
        this.changeValue(newValue);
      } catch (e) {
        this.logger.log(`[radio-group=${this.component.inputId}]`, 'calling save failed');
      } finally {
        this.updateRadioStates(false);
        this.component.afterSave && await this.component.afterSave({ value: this.component.value });
      }
    } else {
      this.logger.log(`[radio-group=${this.component.inputId}]`, 'optimistic update');
      this.changeValue(newValue);
    }
  }

  registerRadio(radio: HTMLElement & OdsRadio): void {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'registerRadio', { radio });
    this.component.radios.push(radio);
    radio.name = this.component.name;
    radio.addEventListener('odsCheckedChange', e => this.updateCheckedState(e as OdsRadioCheckedChangeEvent));
    radio.addEventListener('odsCheckingChange', e => this.updateCheckingState(e as OdsRadioCheckingChangeEvent));
  }

  unregisterRadio(radio: HTMLElement & OdsRadio) {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'unregisterRadio', { radio });
    this.component.radios
      .filter(r => r === radio)
      .forEach(r => {
        r.removeEventListener('odsCheckedChange', e => this.updateCheckedState(e as OdsRadioCheckedChangeEvent));
        r.removeEventListener('odsCheckingChange', e => this.updateCheckingState(e as OdsRadioCheckingChangeEvent));
      });
    this.component.radios = this.component.radios.filter(r => r !== radio);
    if (radio.value === this.component.value) {
      this.changeValue('');
    }
  }

  clearRadios() {
    const radios = this.component.radios;
    if (radios) {
      radios.forEach(radio => {
        radio.removeEventListener('odsCheckedChange', e => this.updateCheckedState(e as OdsRadioCheckedChangeEvent));
        radio.removeEventListener('odsCheckingChange', e => this.updateCheckingState(e as OdsRadioCheckingChangeEvent));
      });
      this.component.radios = [];
    }
  }

  handleLabelClick(event: PointerEvent): void {
    this.logger.log(`[radio-group=${this.component.value}]`, 'click', event);
  }

  onValueChange(newValue: string, previousValue: string): void {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'value changed', { newValue, previousValue });
    if (this.component.radios) {
      this.component.radios.forEach((radio) => {
        radio.updateState();
      });
    }
  }

  onDisabledChange(disabled: boolean): void {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'disabled changed', { disabled });
    this.component.emitDisabled(disabled);
  }
}

import type { OdsRadioCheckedChangeEvent, OdsRadioCheckingChangeEvent } from '../../osds-radio/interfaces/events';
import type { OsdsRadioGroup } from '../osds-radio-group';
import type { OsdsRadio } from '../../osds-radio/osds-radio';
import { OdsLogger } from '@ovhcloud/ods-common-core';

class OdsRadioGroupController {
  private readonly logger = new OdsLogger('OdsRadioGroupController');

  constructor(private component: OsdsRadioGroup) { }

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

  registerRadio(radio: OsdsRadio): void {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'registerRadio', { radio });
    this.component.radios.push(radio);
    radio.name = this.component.name;
    radio.el.addEventListener('odsCheckedChange', e => this.updateCheckedState(e as OdsRadioCheckedChangeEvent));
    radio.el.addEventListener('odsCheckingChange', e => this.updateCheckingState(e as OdsRadioCheckingChangeEvent));
  }

  unregisterRadio(radio: OsdsRadio) {
    this.logger.log(`[radio-group=${this.component.inputId}]`, 'unregisterRadio', { radio });
    this.component.radios
      .filter(r => r === radio)
      .forEach(r => {
        r.el.removeEventListener('odsCheckedChange', e => this.updateCheckedState(e as OdsRadioCheckedChangeEvent));
        r.el.removeEventListener('odsCheckingChange', e => this.updateCheckingState(e as OdsRadioCheckingChangeEvent));
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
        radio.el.removeEventListener('odsCheckedChange', e => this.updateCheckedState(e as OdsRadioCheckedChangeEvent));
        radio.el.removeEventListener('odsCheckingChange', e => this.updateCheckingState(e as OdsRadioCheckingChangeEvent));
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

export { 
  OdsRadioGroupController,
}
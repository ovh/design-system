import type { OsdsRadio } from '../../osds-radio/osds-radio';

interface OdsRadioGroupMethod {
  getRadios(): Promise<OsdsRadio[]>;

  /**
   * called when a radio component is instanced
   * @internal
   * @param radio - html component element
   */
  registerRadio(radio: OsdsRadio): Promise<void>;

  /**
   * called when a radio component is destroyed
   * @internal
   * @param radio - html component element
   */
  unregisterRadio(radio: OsdsRadio): Promise<void>;

  /**
   * @internal
   * @param newValue - new value
   * @param checked - checked or not
   * @param checking - checking or not
   */
  updateState({ newValue, checked, checking }: { newValue: string, checked: boolean, checking: boolean }): Promise<void>;
}

export { 
  OdsRadioGroupMethod,
}

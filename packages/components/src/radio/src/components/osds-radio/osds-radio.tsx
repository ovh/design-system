import type { OdsRadioAttribute } from './interfaces/attributes';
import type { OdsRadioCheckedChangeEventDetail, OdsRadioCheckingChangeEventDetail, OdsRadioEvent } from './interfaces/events';
import type { OdsRadioMethod } from './interfaces/methods';
import type { OsdsRadioGroup } from '../osds-radio-group/osds-radio-group';
import type { OdsRadioizable } from '@ovhcloud/ods-common-core';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsRadioController } from './core/controller';

@Component({
  tag: 'osds-radio',
  styleUrl: 'osds-radio.scss',
  shadow: true,
})
export class OsdsRadio implements OdsRadioAttribute, OdsRadioEvent, OdsRadioMethod {
  private logger = new OdsLogger('OsdsRadio');
  private static radioIds = 0;
  private inputId = `ods-radio-${OsdsRadio.radioIds++}`;
  radioGroup: OsdsRadioGroup | null = null;
  radioizedComponent: (HTMLStencilElement & OdsRadioizable) | null = null;
  controller = new OdsRadioController(this);

  @Element() el!: HTMLStencilElement;

  /** @see OdsRadioAttribute.ariaLabel */
  @Prop({ reflect: true }) ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsRadioAttribute.ariaLabelledby */
  @Prop() ariaLabelledby?= DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsRadioAttribute.save */
  @Prop() save?= DEFAULT_ATTRIBUTE.save;

  /** @see OdsRadioAttributes.beforeSave */
  @Prop() beforeSave?= DEFAULT_ATTRIBUTE.beforeSave;

  /** @see OdsRadioAttribute.afterSave */
  @Prop() afterSave?= DEFAULT_ATTRIBUTE.afterSave;

  /** @see OdsRadioAttribute.checked */
  @Prop({ reflect: true, mutable: true }) checked: boolean = DEFAULT_ATTRIBUTE.checked;

  /** @see OdsRadioAttributes.checking */
  @Prop({ reflect: true, mutable: true }) checking: boolean = DEFAULT_ATTRIBUTE.checking;

  /** @see OdsRadioAttribute.disabled */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsRadioAttribute.label */
  @Prop() label?: string;

  /** @see OdsRadioAttribute.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsRadioAttribute.value */
  @Prop({ reflect: true, mutable: true }) value: string = DEFAULT_ATTRIBUTE.value;

  /** @see OdsRadioEvent.odsValueChange */
  @Event() odsValueChange!: EventEmitter<{ checked: boolean, value: string }>;

  /** @see OdsRadioEvent.odsCheckedChange */
  @Event() odsCheckedChange!: EventEmitter<OdsRadioCheckedChangeEventDetail>;

  /** @see OdsRadioEvent.odsCheckingChange */
  @Event() odsCheckingChange!: EventEmitter<OdsRadioCheckingChangeEventDetail>;

  /** @see OdsRadioEvent.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;

  /** @see OdsRadioEvent.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() buttonTabindex = 0;

  @Watch('disabled')
  updateDisabledOnChild(disabled: boolean): void {
    this.controller.updateDisabledOnChild(disabled);
    this.buttonTabindex = disabled ? -1 : 0;
  }

  @Watch('checking')
  updateCheckingOnChild(checking: boolean): void {
    this.controller.updateCheckingOnChild(checking);
  }

  @Watch('value')
  watchValue(value: string): void {
    this.controller.watchValue(value);
  }

  @Watch('checked')
  updateCheckOnChild(checked: boolean): void {
    this.controller.updateCheckOnChild(checked);
  }

  /**
   * @see OdsRadioBehavior.emitBlur
   */
  emitBlur(): void {
    this.odsBlur.emit();
  }

  /**
   * @see OdsRadioBehavior.emitFocus
   */
  emitFocus(): void {
    this.odsFocus.emit();
  }

  /**
   * @see OdsRadioBehavior.emitChecked
   */
  emitChecked(): void {
    this.logger.log(`[radio=${this.value}]`, 'emit checked', { checked: this.checked });
    this.odsCheckedChange.emit({ checked: this.checked, value: this.value });
  }

  /**
   * @see OdsRadioBehavior.emitChecking
   */
  emitChecking(): void {
    this.logger.log(`[radio=${this.value}]`, 'emit checking', { checking: this.checking });
    this.odsCheckingChange.emit({ checking: this.checking, value: this.value });
  }

  /**
   * @see OdsRadioBehavior.onFocus
   */
  onFocus(): void {
    this.controller.onFocus();
  }

  /**
   * @see OdsRadioBehavior.onBlur
   */
  onBlur(): void {
    this.controller.onBlur();
  }

  changeValue(value: string): void {
    this.logger.log(`[radio=${this.value}]`, 'value changed. emit new value', { value });
    this.value = value;
    this.odsValueChange.emit({ value, checked: this.checked });
  }

  /**
   * @internal
   * @see OdsRadioMethods.setFocus
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.focus();
  }

  /**
   * @internal
   * @see OdsRadioMethods.setButtonTabindex
   */
  @Method()
  async setButtonTabindex(value: number): Promise<void> {
    this.controller.setButtonTabindex(value);
  }

  /**
   * @internal
   * @see OdsRadioMethods.updateState
   */
  @Method()
  async updateState(checking?: boolean): Promise<void> {
    this.controller.updateState(checking);
  }

  private async handleLabelClick(event: MouseEvent) {
    await this.controller.handleLabelClick(event);
  }

  private async handleLabelKeyEvent(event: KeyboardEvent) {
    await this.controller.handleLabelKeyEvent(event);
  }

  /**
   * @see OdsRadioBehavior.beforeInit
   */
  beforeInit(): void {
    this.controller.beforeInit();
  }

  /**
   * @see OdsRadioBehavior.afterInit
   */
  afterInit(): void {
    this.controller.afterInit();
  }

  /**
   * @see OdsRadioBehavior.onDestroy
   */
  onDestroy(): void {
    this.controller.onDestroy();
  }

  connectedCallback(): void {
    this.beforeInit();
  }

  componentDidLoad(): void {
    (async() => {
      this.afterInit();
    })();
  }

  disconnectedCallback(): void {
    this.onDestroy();
  }

  render() {
    const {
      buttonTabindex,
      checked,
      disabled,
      inputId,
      name,
      label,
      ariaLabelledby,
    } = this;

    return (
      <Host {...{
        'aria-labelledby': label ? ariaLabelledby : null,
        tabindex: buttonTabindex,
        onFocus: this.onFocus.bind(this),
        onBlur: this.onBlur.bind(this),
        onKeyPress: this.handleLabelKeyEvent.bind(this),
        onClick: this.handleLabelClick.bind(this),
      }}
      >
        <label>
          <input {...{
            'aria-checked': `${checked}`,
            class: 'radio__input',
            checked,
            disabled,
            id: inputId,
            name,
            tabindex: '-1',
            type: 'radio',
          }}
          />
          <slot></slot>
        </label>
      </Host>
    );
  }

}

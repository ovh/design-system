import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsLogger,
  OdsRadio,
  OdsRadioCheckedChangeEventDetail,
  OdsRadioCheckingChangeEventDetail,
  OdsRadioController,
  OdsRadioEvents,
  OdsRadioGroup,
  OdsRadioMethods,
  OdsRadioizable,
  odsRadioDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * @slot (unnamed) - Radio content
 */
@Component({
  tag: 'osds-radio',
  styleUrl: 'osds-radio.scss',
  shadow: true,
})
export class OsdsRadio implements OdsRadio<OdsStencilMethods<OdsRadioMethods>, OdsStencilEvents<OdsRadioEvents>> {
  private logger = new OdsLogger('OsdsRadio');
  private static radioIds = 0;
  private inputId = `ods-radio-${OsdsRadio.radioIds++}`;
  radioGroup: (HTMLStencilElement & OdsRadioGroup) | null = null;
  radioizedComponent: (HTMLStencilElement & OdsRadioizable) | null = null;
  controller: OdsRadioController = new OdsRadioController(this);

  @Element() el!: HTMLStencilElement;

  /** @see OdsRadioAttributes.ariaLabel */
  @Prop({ reflect: true }) ariaLabel = odsRadioDefaultAttributes.ariaLabel;

  /** @see OdsRadioAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?= odsRadioDefaultAttributes.ariaLabelledby;

  /** @see OdsRadioAttributes.save */
  @Prop() save?= odsRadioDefaultAttributes.save;

  /** @see OdsRadioAttributes.beforeSave */
  @Prop() beforeSave?= odsRadioDefaultAttributes.beforeSave;

  /** @see OdsRadioAttributes.afterSave */
  @Prop() afterSave?= odsRadioDefaultAttributes.afterSave;

  /** @see OdsRadioAttributes.checked */
  @Prop({ reflect: true, mutable: true }) checked: boolean = odsRadioDefaultAttributes.checked;

  /** @see OdsRadioAttributes.checking */
  @Prop({ reflect: true, mutable: true }) checking: boolean = odsRadioDefaultAttributes.checking;

  /** @see OdsRadioAttributes.disabled */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = odsRadioDefaultAttributes.disabled;

  /** @see OdsRadioAttributes.label */
  @Prop() label?: string;

  /** @see OdsRadioAttributes.name */
  @Prop({ reflect: true }) name?: string = odsRadioDefaultAttributes.name;

  /** @see OdsRadioAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: string = odsRadioDefaultAttributes.value;

  /** @see OdsRadioEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<{ checked: boolean, value: string }>;

  /** @see OdsRadioEvents.odsCheckedChange */
  @Event() odsCheckedChange!: EventEmitter<OdsRadioCheckedChangeEventDetail>;

  /** @see OdsRadioEvents.odsCheckingChange */
  @Event() odsCheckingChange!: EventEmitter<OdsRadioCheckingChangeEventDetail>;

  /** @see OdsRadioEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;

  /** @see OdsRadioEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() buttonTabindex = 0;

  @Watch('disabled')
  updateDisabledOnChild(disabled: boolean): void {
    this.controller.updateDisabledOnChild(disabled);
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
    (async () => {
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
      ariaLabelledby
    } = this;

    return (
      <Host {...{
        'aria-labelledby': label ? ariaLabelledby : null,
        tabindex: buttonTabindex,
        onFocus: () => this.onFocus(),
        onBlur: () => this.onBlur(),
        onKeyPress: this.handleLabelKeyEvent.bind(this)
      }}
      >
        <label onClick={this.handleLabelClick.bind(this)}>
          <input {...{
            'aria-checked': `${checked}`,
            class: 'radio__input',
            checked,
            disabled,
            id: inputId,
            name,
            tabindex: '-1',
            type: 'radio'
          }}
          />
          <slot></slot>
        </label>
      </Host>
    );
  }

}

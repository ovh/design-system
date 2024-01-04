import type { OdsCheckboxAttribute, OdsCheckboxAttributeCbk } from './interfaces/attributes';
import type {
  OdsCheckboxCheckedChangeEventDetail,
  OdsCheckboxEvent,
  OdsCheckboxFocusChangeEventDetail,
  OdsCheckboxUpdatingChangeEventDetail,
} from './interfaces/events';
import type { OdsCheckboxMethod } from './interfaces/methods';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { OdsCheckboxable, OdsCommonFieldMethodController, OdsInputValue, OdsLogger, ODS_COMMON_FIELD_SIZE } from '@ovhcloud/ods-common-core';
import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCheckboxController } from './core/ods-checkbox-controller';


@Component({
  tag: 'osds-checkbox',
  styleUrl: 'osds-checkbox.scss',
  shadow: true,
})
export class OsdsCheckbox implements OdsCheckboxMethod, OdsCheckboxEvent, OdsCheckboxAttribute {
  private static checkboxIds = 0;
  /** @see OdsComponent.controller */
  controller = new OdsCheckboxController(this);
  commonFieldMethodController = new OdsCommonFieldMethodController(this);
  private readonly inputId = `ods-checkbox-${OsdsCheckbox.checkboxIds++}`;
  private readonly logger = new OdsLogger('OsdsCheckbox');

  @Element() hostElement!: HTMLStencilElement;
  inputEl?: HTMLInputElement;
  checkboxableComponent: (HTMLStencilElement & OdsCheckboxable) | null = null;
  @State() tabindex = 0;

  @Prop() afterSave?: OdsCheckboxAttributeCbk = DEFAULT_ATTRIBUTE.afterSave;

  @Prop({ reflect: true }) ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  @Prop() beforeSave?: OdsCheckboxAttributeCbk = DEFAULT_ATTRIBUTE.beforeSave;

  @Prop({ reflect: true, mutable: true }) checked: boolean = DEFAULT_ATTRIBUTE.checked;

  @Prop({ reflect: true }) defaultValue: OdsInputValue = DEFAULT_ATTRIBUTE.defaultValue;

  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;

  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;

  @Prop({ reflect: true, mutable: true }) hasFocus: boolean = DEFAULT_ATTRIBUTE.hasFocus;

  @Prop() label?: string;

  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;

  @Prop({ mutable: true }) save?: OdsCheckboxAttributeCbk = DEFAULT_ATTRIBUTE.save;

  @Prop({ reflect: true }) size: ODS_COMMON_FIELD_SIZE = DEFAULT_ATTRIBUTE.size;

  @Prop({ reflect: true, mutable: true }) updating: boolean = DEFAULT_ATTRIBUTE.updating;

  @Prop({ reflect: true, mutable: true }) value: string = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<OdsCheckboxFocusChangeEventDetail>;

  @Event() odsCheckedChange!: EventEmitter<OdsCheckboxCheckedChangeEventDetail>;

  @Event() odsFocus!: EventEmitter<OdsCheckboxFocusChangeEventDetail>;

  @Event() odsUpdatingChange!: EventEmitter<OdsCheckboxUpdatingChangeEventDetail>;

  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async() => {
      this.checkboxableComponent = (this.hostElement.firstElementChild as unknown) as (HTMLStencilElement & OdsCheckboxable);
      this.afterInit();
    })();
  }

  emitBlur() {
    this.odsBlur.emit({ value: this.value, focus: false });
  }

  emitChecked() {
    this.logger.log(`[checkbox=${this.inputId}]`, 'emit checked', { checked: this.checked });
    this.odsCheckedChange.emit({ checked: this.checked, value: this.value });
  }

  emitFocus() {
    this.odsFocus.emit({ value: this.value, focus: true });
  }

  emitUpdating() {
    this.logger.log(`[checkbox=${this.inputId}]`, 'emit updating', { updating: this.updating });
    this.odsUpdatingChange.emit({ updating: this.updating, value: this.value });
  }

  getTabIndex() {
    return this.controller.getTabIndex();
  }

  /**
   * @param event - event from mouse
   */
  @Listen('click')
  async handleToggleByClick(event: MouseEvent) {
    this.logger.log(`[checkbox=${this.inputId}]`, 'click');
    await this.controller.handleToggleByClick(event);
  }

  /**
   * using `keydown` instead of `keypress` (deprecated)
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
   * @param event - event from keyboard
   */
  @Listen('keydown')
  async handleToggleByKeyEvent(event: KeyboardEvent) {
    this.logger.log(`[checkbox=${this.inputId}]`, 'key event', { event });
    await this.controller.handleToggleByKeyEvent(event);
  }

  @Listen('blur')
  onBlur() {
    this.controller.onBlur();
  }

  @Listen('focus')
  onFocus() {
    this.controller.onFocus();
  }

  @Watch('checked')
  propagateCheckedToChild(checked: boolean): void {
    this.controller.propagateCheckedToChild(checked);
  }

  @Watch('disabled')
  propagateDisabledToChild(disabled: boolean): void {
    this.controller.propagateDisabledToChild(disabled);
  }

  @Watch('hasFocus')
  propagateHasFocusToChild(hasFocus: boolean): void {
    this.controller.propagateHasFocusToChild(hasFocus);
  }

  @Method()
  async setFocus() {
    this.commonFieldMethodController.setFocus();
  }

  @Method()
  async setTabindex(index: number) {
    this.commonFieldMethodController.setTabindex(index);
  }

  render() {
    const { checked, disabled, inputId, name } = this;
    const { label, ariaLabelledby } = this;

    return (
      <Host {...{
        'aria-labelledby': label ? ariaLabelledby : null,
        tabindex: this.getTabIndex(),
      }}
      role="checkbox"
      aria-checked={`${checked}`}
      >
        <label>
          <input {...{
            'aria-checked': `${checked}`,
            class: 'checkbox__input',
            checked,
            disabled,
            id: inputId,
            name,
            tabindex: '-1',
            type: 'checkbox',
            ref: (el) => this.inputEl = el as HTMLInputElement,
          }}
          />
          <slot aria-hidden="true"></slot>
        </label>
      </Host>
    );
  }
}
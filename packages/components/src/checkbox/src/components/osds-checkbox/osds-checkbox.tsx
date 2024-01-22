import type { OdsCheckboxAttribute, OdsCheckboxAttributeCbk } from './interfaces/attributes';
import type {
  OdsCheckboxCheckedChangeEventDetail,
  OdsCheckboxEvent,
  OdsCheckboxFocusChangeEventDetail,
  OdsCheckboxUpdatingChangeEventDetail,
} from './interfaces/events';
import type { OdsCheckboxMethod } from './interfaces/methods';
import type { HTMLStencilElement } from '@stencil/core/internal';

import { OdsCheckboxable, OdsLogger } from '@ovhcloud/ods-common-core';
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
  private readonly inputId = `ods-checkbox-${OsdsCheckbox.checkboxIds++}`;
  private readonly logger = new OdsLogger('OsdsCheckbox');

  @Element() hostElement!: HTMLStencilElement;
  inputEl?: HTMLInputElement;
  checkboxableComponent: (HTMLStencilElement & OdsCheckboxable) | null = null;
  @State() tabindex = 0;

  /** @see OdsCheckboxAttribute.afterSave */
  @Prop() afterSave?: OdsCheckboxAttributeCbk = DEFAULT_ATTRIBUTE.afterSave;
  /** @see OdsCheckboxAttribute.ariaLabel */
  @Prop({ reflect: true }) ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;
  /** @see OdsCheckboxAttribute.ariaLabelledby */
  @Prop() ariaLabelledby? = DEFAULT_ATTRIBUTE.ariaLabelledby;
  /** @see OdsCheckboxAttribute.beforeSave */
  @Prop() beforeSave?: OdsCheckboxAttributeCbk = DEFAULT_ATTRIBUTE.beforeSave;
  /** @see OdsCheckboxAttribute.checked */
  @Prop({ reflect: true, mutable: true }) checked = DEFAULT_ATTRIBUTE.checked;
  /** @see OdsCheckboxAttribute.disabled */
  @Prop({ reflect: true }) disabled = DEFAULT_ATTRIBUTE.disabled;
  /** @see OdsCheckboxAttribute.hasFocus */
  @Prop({ reflect: true, mutable: true }) hasFocus = DEFAULT_ATTRIBUTE.hasFocus;
  /** @see OdsCheckboxAttribute.label */
  @Prop() label?: string;
  /** @see OdsCheckboxAttribute.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;
  /** @see OdsCheckboxAttribute.save */
  @Prop({ mutable: true }) save?:OdsCheckboxAttributeCbk = DEFAULT_ATTRIBUTE.save;
  /** @see OdsCheckboxAttribute.updating */
  @Prop({ reflect: true, mutable: true }) updating = DEFAULT_ATTRIBUTE.updating;
  /** @see OdsCheckboxAttribute.value */
  @Prop({ reflect: true, mutable: true }) value = DEFAULT_ATTRIBUTE.value;

  /** @see OdsCheckboxEvent.odsBlur */
  @Event() odsBlur!: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /** @see OdsCheckboxEvent.odsCheckedChange */
  @Event() odsCheckedChange!: EventEmitter<OdsCheckboxCheckedChangeEventDetail>;
  /** @see OdsCheckboxEvent.odsFocus */
  @Event() odsFocus!: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /** @see OdsCheckboxEvent.odsUpdatingChange */
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
    if (!this.disabled) {
      this.logger.log(`[checkbox=${this.inputId}]`, 'click');
      await this.controller.handleToggleByClick(event);
    }
  }

  /**
   * using `keydown` instead of `keypress` (deprecated)
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
   * @param event - event from keyboard
   */
  @Listen('keydown')
  async handleToggleByKeyEvent(event: KeyboardEvent) {
    if (!this.disabled) {
      this.logger.log(`[checkbox=${this.inputId}]`, 'key event', { event });
      await this.controller.handleToggleByKeyEvent(event);
    }
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

  /**
   * @see OdsCheckboxMethod.setFocus
   */
  @Method()
  async setFocus() {
    this.controller.setFocus();
  }

  /**
   * @see OdsCheckboxMethod.setTabindex
   */
  @Method()
  async setTabindex(index: number) {
    this.controller.setTabindex(index);
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

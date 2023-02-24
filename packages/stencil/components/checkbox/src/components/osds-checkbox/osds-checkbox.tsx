import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsCheckbox,
  OdsCheckboxable, OdsCheckboxAttributeCbk,
  OdsCheckboxCheckedChangeEventDetail,
  OdsCheckboxController,
  odsCheckboxDefaultAttributes,
  OdsCheckboxEvents,
  OdsCheckboxFocusChangeEventDetail,
  OdsCheckboxMethods,
  OdsCheckboxUpdatingChangeEventDetail,
  OdsLogger
} from '@ovhcloud/ods-core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { Build } from '@stencil/core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { getOdsWindow } from '@ovhcloud/ods-core';

@Component({
  tag: 'osds-checkbox',
  styleUrl: 'osds-checkbox.scss',
  shadow: true,
})
export class OsdsCheckbox implements OdsCheckbox<OdsStencilMethods<OdsCheckboxMethods>, OdsStencilEvents<OdsCheckboxEvents>> {
  private static checkboxIds = 0;
  /** @see OdsCheckboxAttributes.afterSave */
  @Prop() afterSave?:OdsCheckboxAttributeCbk = odsCheckboxDefaultAttributes.afterSave;
  /** @see OdsCheckboxAttributes.ariaLabel */
  @Prop({ reflect: true }) ariaLabel = odsCheckboxDefaultAttributes.ariaLabel;
  /** @see OdsCheckboxAttributes.ariaLabelledby */
  @Prop() ariaLabelledby? = odsCheckboxDefaultAttributes.ariaLabelledby;
  /** @see OdsCheckboxAttributes.beforeSave */
  @Prop() beforeSave?:OdsCheckboxAttributeCbk = odsCheckboxDefaultAttributes.beforeSave;
  /** @see OdsCheckboxBehavior.checkboxableComponent */
  checkboxableComponent: (HTMLStencilElement & OdsCheckboxable) | null = null;
  /** @see OdsCheckboxAttributes.checked */
  @Prop({ reflect: true, mutable: true }) checked = odsCheckboxDefaultAttributes.checked;
  /** @see OdsComponent.controller */
  controller: OdsCheckboxController = new OdsCheckboxController(this as OdsCheckbox);
  /** @see OdsCheckboxAttributes.disabled */
  @Prop({ reflect: true}) disabled = odsCheckboxDefaultAttributes.disabled;
  /** @see OdsCheckboxAttributes.hasFocus */
  @Prop({ reflect: true, mutable: true }) hasFocus = odsCheckboxDefaultAttributes.hasFocus;
  /** @see OdsCheckboxBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;
  /** @see OdsCheckboxBehavior.inputEl */
  inputEl?: HTMLInputElement;
  /** @see OdsCheckboxAttributes.label */
  @Prop() label?: string;
  /** @see OdsCheckboxAttributes.name */
  @Prop({ reflect: true }) name?: string = odsCheckboxDefaultAttributes.name;
  /** @see OdsCheckboxEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /** @see OdsCheckboxEvents.odsCheckedChange */
  @Event() odsCheckedChange!: EventEmitter<OdsCheckboxCheckedChangeEventDetail>;
  /** @see OdsCheckboxEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<OdsCheckboxFocusChangeEventDetail>;
  /** @see OdsCheckboxEvents.odsUpdatingChange */
  @Event() odsUpdatingChange!: EventEmitter<OdsCheckboxUpdatingChangeEventDetail>;
  /** @see OdsCheckboxAttributes.save */
  @Prop({ mutable: true }) save?:OdsCheckboxAttributeCbk = odsCheckboxDefaultAttributes.save;
  /** @see OdsCheckboxBehavior.tabindex */
  @State() tabindex = 0;
  /** @see OdsCheckboxAttributes.updating */
  @Prop({ reflect: true, mutable: true }) updating = odsCheckboxDefaultAttributes.updating;
  /** @see OdsCheckboxAttributes.value */
  @Prop({ reflect: true, mutable: true }) value = odsCheckboxDefaultAttributes.value;
  private readonly inputId = `ods-checkbox-${OsdsCheckbox.checkboxIds++}`;
  private readonly logger = new OdsLogger('OsdsCheckbox');

  /**
   * @see OdsCheckboxBehavior.afterInit
   */
  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async () => {
      this.checkboxableComponent = (this.hostElement.firstElementChild as unknown) as (HTMLStencilElement & OdsCheckboxable);
      this.afterInit();
    })();
  }

  connectedCallback() {
    console.log('2 getOdsWindow()', (getOdsWindow() as any).winId)
    console.log('Build.isBrowser', Build.isBrowser);
    console.log('Build.isBrowser', global?.window);
    this.logger.log(`[checkbox=${this.inputId}]`, 'connectedCallback');
  }

  /**
   * @see OdsCheckboxBehavior.emitBlur
   */
  emitBlur() {
    this.odsBlur.emit({ value: this.value, focus: false });
  }

  /**
   * @see OdsCheckboxBehavior.emitChecked
   */
  emitChecked() {
    this.logger.log(`[checkbox=${this.inputId}]`, 'emit checked', { checked: this.checked });
    this.odsCheckedChange.emit({ checked: this.checked, value: this.value });
  }

  /**
   * @see OdsCheckboxBehavior.emitFocus
   */
  emitFocus() {
    this.odsFocus.emit({ value: this.value, focus: true });
  }

  /**
   * @see OdsCheckboxBehavior.emitUpdating
   */
  emitUpdating() {
    this.logger.log(`[checkbox=${this.inputId}]`, 'emit updating', { updating: this.updating });
    this.odsUpdatingChange.emit({ updating: this.updating, value: this.value });
  }

  /**
   * @see OdsCheckboxBehavior.getTabIndex
   */
  getTabIndex() {
    return this.controller.getTabIndex();
  }

  /**
   * @see OdsCheckboxBehavior.checkboxableComponent
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
   * @see OdsCheckboxBehavior.handleToggleByKeyEvent
   * @param event - event from keyboard
   */
  @Listen('keydown')
  async handleToggleByKeyEvent(event: KeyboardEvent) {
    this.logger.log(`[checkbox=${this.inputId}]`, 'key event', { event });
    await this.controller.handleToggleByKeyEvent(event);
  }

  /**
   * @see OdsCheckboxBehavior.onBlur
   */
  @Listen('blur')
  onBlur() {
    this.controller.onBlur();
  }

  /**
   * @see OdsCheckboxBehavior.onFocus
   */
  @Listen('focus')
  onFocus() {
    this.controller.onFocus();
  }

  /**
   * @see OdsCheckboxBehavior.propagateCheckedToChild
   */
  @Watch('checked')
  propagateCheckedToChild(checked: boolean): void {
    this.controller.propagateCheckedToChild(checked);
  }

  /**
   * @see OdsCheckboxBehavior.propagateDisabledToChild
   */
  @Watch('disabled')
  propagateDisabledToChild(disabled: boolean): void {
    this.controller.propagateDisabledToChild(disabled);
  }

  /**
   * @see OdsCheckboxBehavior.propagateHasFocusToChild
   */
  @Watch('hasFocus')
  propagateHasFocusToChild(hasFocus: boolean): void {
    this.controller.propagateHasFocusToChild(hasFocus);
  }

  render() {
    const { checked, disabled, inputId, name } = this;
    const { label, ariaLabelledby } = this;

    return (
      <Host {...{
        'aria-labelledby': label ? ariaLabelledby : null,
        tabindex: this.getTabIndex()
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

  /**
   * @see OdsCheckboxMethods.setFocus
   */
  @Method()
  async setFocus() {
    this.controller.setFocus();
  }

  /**
   * @see OdsCheckboxMethods.setTabindex
   */
  @Method()
  async setTabindex(index: number) {
    this.controller.setTabindex(index);
  }

}

import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsErrorStateControl,
  OdsFormControl,
  OdsTextArea,
  OdsTextAreaController,
  OdsTextAreaEvents,
  OdsTextAreaMethods,
  OdsTextAreaSize,
  OdsTextAreaValidityState,
  OdsTextAreaValueChangeEventDetail,
  odsTextAreaDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 *
 */
@Component({
  tag: 'osds-textarea',
  styleUrl: 'osds-textarea.scss',
  shadow: true,
})
export class OsdsTextArea implements OdsTextArea<OdsStencilMethods<OdsTextAreaMethods>, OdsStencilEvents<OdsTextAreaEvents>> {
  controller: OdsTextAreaController = new OdsTextAreaController(this);

  @Element() el!: HTMLElement;
  textInputEl?: HTMLTextAreaElement;

  /**
   * The tabindex of the textarea.
   * @internal
   */
  @State() textInputTabIndex = 0;
  @State() hasFocus = false;

  /** @see OdsTextAreaAttributes.textAreaId */
  @Prop() textAreaId?: string = odsTextAreaDefaultAttributes.textAreaId;

  /** @see OdsTextAreaAttributes.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = odsTextAreaDefaultAttributes.ariaLabel;

  /** @see OdsTextAreaAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?: string = odsTextAreaDefaultAttributes.ariaLabelledby;

  /** @see OdsTextAreaAttributes.color */
  @Prop({ reflect: true }) color?: OdsThemeColorIntent = odsTextAreaDefaultAttributes.color;

  /** @see OdsTextAreaAttributes.cols */
  @Prop({ reflect: true }) cols?: number = odsTextAreaDefaultAttributes.cols;

  /** @see OdsTextAreaAttributes.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = odsTextAreaDefaultAttributes.contrasted;

  /** @see OdsTextAreaAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue?: string = odsTextAreaDefaultAttributes.defaultValue;

  /** @see OdsTextAreaAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = odsTextAreaDefaultAttributes.disabled;

  /** @see OdsTextAreaAttributes.error */
  @Prop({ reflect: true }) error?: boolean = odsTextAreaDefaultAttributes.error;

  /** @see OdsTextAreaAttributes.errorStateControl */
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = odsTextAreaDefaultAttributes.errorStateControl;

  /** @see OdsTextAreaAttributes.inline */
  @Prop({ reflect: true }) inline?: boolean = odsTextAreaDefaultAttributes.inline;

  /** @see OdsTextAreaAttributes.formControl */
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsTextAreaValidityState> = odsTextAreaDefaultAttributes.formControl;

  /** @see OdsTextAreaAttributes.name */
  @Prop({ reflect: true }) name?: string = odsTextAreaDefaultAttributes.name;

  /** @see OdsTextAreaAttributes.placeholder */
  @Prop({ reflect: true }) placeholder?: string = odsTextAreaDefaultAttributes.placeholder;

  /** @see OdsTextAreaAttributes.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = odsTextAreaDefaultAttributes.readOnly;

  /** @see OdsTextAreaAttributes.required */
  @Prop({ reflect: true }) required?: boolean = odsTextAreaDefaultAttributes.required;

  /** @see OdsTextAreaAttributes.resizable */
  @Prop({ reflect: true }) resizable?: boolean = odsTextAreaDefaultAttributes.resizable;

  /** @see OdsTextAreaAttributes.rows */
  @Prop({ reflect: true }) rows?: number = odsTextAreaDefaultAttributes.rows;

  /** @see OdsTextAreaAttributes.size */
  @Prop({ reflect: true }) size?: OdsTextAreaSize = odsTextAreaDefaultAttributes.size;

  /** @see OdsTextAreaAttributes.spellcheck */
  @Prop({ reflect: true }) spellcheck: HTMLElement['spellcheck'] = odsTextAreaDefaultAttributes.spellcheck;

  /** @see OdsTextAreaAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: string = odsTextAreaDefaultAttributes.value;

  /** @see OdsTextAreaEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsTextAreaValueChangeEventDetail>;

  /** @see OdsTextAreaEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  /** @see OdsTextAreaEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsTextAreaValidityState>): void {
    this.controller.registerFormControl(formControl);
  }

  @Watch('defaultValue')
  onDefaultValueChange(defaultValue?: HTMLTextAreaElement['defaultValue']): void {
    this.controller.onDefaultValueChange(defaultValue);
  }

  @Watch('inline')
  onInlineChange(inline: boolean) {
    if (!inline) {
      this.textInputEl?.style.removeProperty('width');
    }
  }

  @Watch('value')
  onValueChange(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void {
    this.controller.emitValue(value, oldValue);
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  /**
   * @see OdsTextAreaBehavior.beforeInit
   */
   beforeInit(): void {
    this.controller.beforeInit();
  }

  /**
   * @see OdsTextAreaBehavior.emitChange
   */
   emitChange(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void {
    this.odsValueChange.emit({
      value: value == null ? value : `${value}`,
      oldValue: oldValue == null ? oldValue : `${oldValue}`,
      validity: this.controller.getTextAreaValidity()
    });
  }

  /**
   * @see OdsTextAreaBehavior.emitBlur
   */
   emitBlur(): void {
    this.odsBlur.emit();
  }

  /**
   * @see OdsTextAreaBehavior.emitFocus
   */
   emitFocus(): void {
    this.odsFocus.emit();
  }

  /**
   * @see OdsTextAreaBehavior.onBlur
   */
   onBlur(): void {
    this.controller.onBlur();
  }

  /**
   * @see OdsTextAreaBehavior.onInput
   */
  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  /**
   * @see OdsTextAreaBehavior.onChange
   */
   onChange(): void {
    this.controller.onChange();
  }

  /**
   * @see OdsTextAreaBehavior.onFocus
   */
   @Listen('focus')
  onFocus(): void {
    this.controller.onFocus();
    this.setFocus.bind(this)();
  }

  /**
   * @see OdsTextAreaMethods.setFocus
   */
  @Method()
  async setFocus(): Promise<void> {
    this.textInputEl?.focus();
    this.hasFocus = true;
  }

  /**
   * @see OdsTextAreaMethods.getValidity
   */
  @Method()
  async getValidity(): Promise<OdsTextAreaValidityState> {
    return this.controller.getTextAreaValidity();
  }

  /**
   * @see OdsTextAreaMethods.clear
   */
  @Method()
  async clear(): Promise<void> {
    this.controller.setValue();
  }

  /**
   * @see OdsTextAreaMethods.reset
   */
  @Method()
  async reset(): Promise<void> {
    this.controller.setValue(this.defaultValue || '');
  }

  /**
   * @see OdsTextAreaMethods.setTextAreaTabindex
   */
  @Method()
  async setTextAreaTabindex(value: number): Promise<void> {
    this.controller.setTextAreaTabindex(value);
  }

  render() {
    const {
      textAreaId,
      ariaLabel,
      ariaLabelledby,
      cols,
      disabled,
      hasFocus,
      textInputTabIndex,
      name,
      placeholder,
      readOnly,
      required,
      rows,
      spellcheck,
      value
    } = this;

    const labelId = ariaLabelledby || `${textAreaId}-label`;

    return (
      <Host {...{
        class: {
          'ods-error': Boolean(this.controller.hasError()),
        },
        tabindex: textInputTabIndex,
        hasFocus
      }}
      >
        <textarea
          {...{
            ariaLabel,
            ariaLabelledby: labelId || null,
            disabled,
            id: textAreaId,
            name,
            onBlur: () => this.onBlur(),
            onChange: () => this.onChange(),
            onFocus: () => this.onFocus(),
            onInput: (e) => this.onInput(e),
            placeholder,
            readOnly,
            ref: (el) => this.textInputEl = el as HTMLTextAreaElement,
            required,
            tabindex: '-1',
            cols,
            rows,
            defaultValue: value
          }}
          spellcheck={spellcheck}
        >
        </textarea>
      </Host>
    );
  }
}

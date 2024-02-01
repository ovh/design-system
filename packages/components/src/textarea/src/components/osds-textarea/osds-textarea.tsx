import type { OdsTextAreaAttribute } from './interfaces/attributes';
import type { OdsTextAreaEvent, OdsTextAreaValueChangeEvent } from './interfaces/events';
import type { OdsTextAreaMethod } from './interfaces/methods';
import type { OdsErrorStateControl, OdsFormControl, OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { EventEmitter } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TEXTAREA_SIZE } from './constants/textarea-size';
import { OdsTextAreaController } from './core/controller';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-textarea.scss',
  tag: 'osds-textarea',
})
export class OsdsTextArea implements OdsTextAreaAttribute, OdsTextAreaEvent, OdsTextAreaMethod {
  controller = new OdsTextAreaController(this);
  textInputEl?: HTMLTextAreaElement;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @State() hasFocus = false;
  @State() textInputTabIndex = 0;

  @Prop() textAreaId?: string = DEFAULT_ATTRIBUTE.textAreaId;
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;
  @Prop({ reflect: true }) cols?: number = DEFAULT_ATTRIBUTE.cols;
  @Prop({ reflect: true }) contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;
  @Prop({ reflect: true }) defaultValue?: string = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = DEFAULT_ATTRIBUTE.errorStateControl;
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsTextAreaValidityState> = DEFAULT_ATTRIBUTE.formControl;
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;
  @Prop({ reflect: true }) resizable?: boolean = DEFAULT_ATTRIBUTE.resizable;
  @Prop({ reflect: true }) rows?: number = DEFAULT_ATTRIBUTE.rows;
  @Prop({ reflect: true }) size?: ODS_TEXTAREA_SIZE = DEFAULT_ATTRIBUTE.size;
  @Prop({ reflect: true }) spellcheck: HTMLElement['spellcheck'] = DEFAULT_ATTRIBUTE.spellcheck;
  @Prop({ reflect: true, mutable: true }) value: string = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsTextAreaValueChangeEvent>;

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsTextAreaValidityState>): void {
    this.controller.registerFormControl(formControl);
  }

  @Watch('inline')
  onInlineChange(inline: boolean) {
    if (!inline) {
      this.textInputEl?.style.removeProperty('width');
    }
  }

  @Watch('value')
  onValueChange(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void {
    this.controller.onValueChange(value, oldValue);
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  formResetCallback(): void {
    this.value = this.defaultValue ?? '';
  }

  beforeInit(): void {
    this.controller.beforeInit();
  }

  emitChange(value: HTMLTextAreaElement['value'], oldValue?: HTMLTextAreaElement['value']): void {
    this.odsValueChange.emit({
      oldValue: oldValue === null ? oldValue : `${oldValue}`,
      validity: this.controller.getTextAreaValidity(),
      value: value === null ? value : `${value}`,
    });
  }

  emitBlur(): void {
    this.odsBlur.emit();
  }

  emitFocus(): void {
    this.odsFocus.emit();
  }

  onBlur(): void {
    this.controller.onBlur();
  }

  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  @Listen('focus')
  onFocus(): void {
    this.controller.onFocus();
    this.setFocus.bind(this)();
  }

  @Method()
   async setFocus(): Promise<void> {
     this.textInputEl?.focus();
     this.hasFocus = true;
   }

  @Method()
  async getValidity(): Promise<OdsTextAreaValidityState> {
    return this.controller.getTextAreaValidity();
  }

  @Method()
  async clear(): Promise<void> {
    this.controller.clear();
  }

  @Method()
  async reset(): Promise<void> {
    this.controller.reset();
  }

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
      value,
    } = this;

    const labelId = ariaLabelledby || `${textAreaId}-label`;

    return (
      <Host {...{
        class: {
          'ods-error': Boolean(this.controller.hasError()),
        },
        tabindex: textInputTabIndex,
        hasFocus,
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
            onFocus: () => this.onFocus(),
            onInput: (e) => this.onInput(e),
            placeholder,
            readOnly,
            ref: (el) => this.textInputEl = el as HTMLTextAreaElement,
            required,
            tabindex: '-1',
            cols,
            rows,
            defaultValue: value,
            value: value?.toString() || '',
          }}
          spellcheck={spellcheck}
        >
        </textarea>
      </Host>
    );
  }
}

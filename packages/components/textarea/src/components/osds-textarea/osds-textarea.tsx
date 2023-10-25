import type { OdsTextAreaAttribute } from './interfaces/attributes';
import type { OdsTextAreaEvent, OdsTextAreaValueChangeEvent } from './interfaces/events';
import type { OdsTextAreaMethod } from './interfaces/methods';
import type { OdsErrorStateControl, OdsFormControl, OdsTextAreaValidityState } from '@ovhcloud/ods-common-core';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { EventEmitter } from '@stencil/core';

import { Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TEXTAREA_SIZE } from './constants/textarea-size';
import { OdsTextAreaController } from './core/controller';


/**
 *
 */
@Component({
  tag: 'osds-textarea',
  styleUrl: 'osds-textarea.scss',
  shadow: true,
})
export class OsdsTextArea implements OdsTextAreaAttribute, OdsTextAreaEvent, OdsTextAreaMethod {
  @Element() el!: HTMLElement;
  controller = new OdsTextAreaController(this);
  textInputEl?: HTMLTextAreaElement;

  /**
   * The tabindex of the textarea.
   * @internal
   */
  @State() textInputTabIndex = 0;
  @State() hasFocus = false;

  /** @see OdsTextAreaAttributes.textAreaId */
  @Prop() textAreaId?: string = DEFAULT_ATTRIBUTE.textAreaId;

  /** @see OdsTextAreaAttributes.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = DEFAULT_ATTRIBUTE.ariaLabel;

  /** @see OdsTextAreaAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?: string = DEFAULT_ATTRIBUTE.ariaLabelledby;

  /** @see OdsTextAreaAttributes.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsTextAreaAttributes.cols */
  @Prop({ reflect: true }) cols?: number = DEFAULT_ATTRIBUTE.cols;

  /** @see OdsTextAreaAttributes.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsTextAreaAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue?: string = DEFAULT_ATTRIBUTE.defaultValue;

  /** @see OdsTextAreaAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsTextAreaAttributes.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsTextAreaAttributes.errorStateControl */
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = DEFAULT_ATTRIBUTE.errorStateControl;

  /** @see OdsTextAreaAttributes.formControl */
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsTextAreaValidityState> = DEFAULT_ATTRIBUTE.formControl;

  /** @see OdsTextAreaAttributes.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsTextAreaAttributes.name */
  @Prop({ reflect: true }) name?: string = DEFAULT_ATTRIBUTE.name;

  /** @see OdsTextAreaAttributes.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsTextAreaAttributes.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = DEFAULT_ATTRIBUTE.readOnly;

  /** @see OdsTextAreaAttributes.required */
  @Prop({ reflect: true }) required?: boolean = DEFAULT_ATTRIBUTE.required;

  /** @see OdsTextAreaAttributes.resizable */
  @Prop({ reflect: true }) resizable?: boolean = DEFAULT_ATTRIBUTE.resizable;

  /** @see OdsTextAreaAttributes.rows */
  @Prop({ reflect: true }) rows?: number = DEFAULT_ATTRIBUTE.rows;

  /** @see OdsTextAreaAttributes.size */
  @Prop({ reflect: true }) size?: ODS_TEXTAREA_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsTextAreaAttributes.spellcheck */
  @Prop({ reflect: true }) spellcheck: HTMLElement['spellcheck'] = DEFAULT_ATTRIBUTE.spellcheck;

  /** @see OdsTextAreaAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: string = DEFAULT_ATTRIBUTE.value;

  /** @see OdsTextAreaEvents.odsBlur */
  @Event() odsBlur!: EventEmitter<void>;

  /** @see OdsTextAreaEvents.odsFocus */
  @Event() odsFocus!: EventEmitter<void>;

  /** @see OdsTextAreaEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsTextAreaValueChangeEvent>;

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
      oldValue: oldValue === null ? oldValue : `${oldValue}`,
      validity: this.controller.getTextAreaValidity(),
      value: value === null ? value : `${value}`,
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
            defaultValue: value,
          }}
          spellcheck={spellcheck}
        >
        </textarea>
      </Host>
    );
  }
}

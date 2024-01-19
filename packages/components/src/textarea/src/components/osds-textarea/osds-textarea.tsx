import type { OdsTextareaAttribute } from './interfaces/attributes';
import type { OdsTextareaEvent, OdsTextareaValueChangeEventDetail } from './interfaces/events';
import type { OdsTextareaMethod } from './interfaces/methods';
import type { OdsCommonFieldValidityState } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTextareaController } from './core/controller';

@Component({
  formAssociated: true,
  shadow: true,
  styleUrl: 'osds-textarea.scss',
  tag: 'osds-textarea',
})
export class OsdsTextArea implements OdsTextareaAttribute, OdsTextareaEvent, OdsTextareaMethod {
  private static internalIdCount = 0;
  private internalId = `ods-textarea-${OsdsTextArea.internalIdCount++}`;
  controller = new OdsTextareaController<OsdsTextArea>(this);
  textareaElement?: HTMLTextAreaElement;

  @Element() el!: HTMLElement;

  @AttachInternals() internals!: ElementInternals;

  @Prop() ariaLabel: string | null = DEFAULT_ATTRIBUTE.ariaLabel;
  @Prop() ariaLabelledby?: string;
  @Prop({ reflect: true }) cols?: number;
  @Prop({ reflect: true }) defaultValue: string | null = DEFAULT_ATTRIBUTE.defaultValue;
  @Prop({ reflect: true }) disabled: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) error: boolean = DEFAULT_ATTRIBUTE.error;
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) name: string = DEFAULT_ATTRIBUTE.name;
  @Prop({ reflect: true }) placeholder?: string;
  @Prop({ reflect: true }) readOnly?: boolean;
  @Prop({ reflect: true }) required?: boolean;
  @Prop({ reflect: true }) resizable?: boolean = DEFAULT_ATTRIBUTE.resizable;
  @Prop({ reflect: true }) rows?: number;
  @Prop({ reflect: true }) spellcheck: boolean = DEFAULT_ATTRIBUTE.spellcheck;
  @Prop() textAreaId?: string;
  @Prop({ mutable: true, reflect: true }) value: string | null = DEFAULT_ATTRIBUTE.value;

  @State() internalError = this.error;
  @State() tabindex: number = 0;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsValueChange!: EventEmitter<OdsTextareaValueChangeEventDetail>;

  @Method()
  async clear(): Promise<void> {
    return this.controller.clear();
  }

  @Method()
  async getValidity(): Promise<OdsCommonFieldValidityState | undefined> {
    return this.textareaElement && await this.controller.getValidity(this.textareaElement) || undefined;
  }

  @Method()
  async reset(): Promise<void> {
    return this.controller.reset();
  }

  @Listen('focus')
  @Method()
  async setFocus(): Promise<void> {
    return this.controller.setFocus(this.textareaElement as HTMLElement);
  }

  @Method()
  async setTabindex(value: number): Promise<void> {
    return this.controller.setTabindex(value);
  }

  @Watch('value')
  async onValueChange(value: string, oldValue?: string): Promise<void> {
    return this.controller.onValueChange(value, oldValue);
  }

  componentWillLoad(): void {
    this.controller.beforeInit();
  }

  async componentWillUpdate(): Promise<void> {
    this.internalError = await this.controller.hasError();
  }

  formResetCallback(): Promise<void> {
    return this.reset();
  }

  async emitChange(value: string, oldValue?: string): Promise<void> {
    this.odsValueChange.emit({
      name: this.name,
      oldValue: oldValue,
      validity: await this.getValidity(),
      value,
    });
  }

  onBlur(): void {
    this.odsBlur.emit();
  }

  onInput(event: Event): void {
    this.controller.onInput(event);
  }

  render(): FunctionalComponent {
    return (
      <Host
        class={{ 'ods-error': this.internalError }}
        tabindex={ this.tabindex }>
        <textarea
          aria-label={ this.ariaLabel }
          aria-labelledby={ this.ariaLabelledby || `${this.internalId}-label` }
          aria-multiline={ true }
          cols={ this.cols }
          id={ this.textAreaId }
          disabled={ this.disabled }
          name={ this.name }
          onBlur={ (): void => this.onBlur() }
          onFocus={ (): Promise<void> => this.setFocus() }
          onInput={ (e): void => this.onInput(e) }
          placeholder={ this.placeholder }
          readOnly={ this.readOnly }
          ref={ (el): HTMLTextAreaElement => this.textareaElement = el as HTMLTextAreaElement }
          required={ this.required }
          role="textbox"
          rows={ this.rows }
          spellcheck={ this.spellcheck }
          tabindex="-1"
          value={ this.value || '' }>
        </textarea>
      </Host>
    );
  }
}

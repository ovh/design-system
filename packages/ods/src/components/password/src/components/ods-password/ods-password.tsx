import { AttachInternals, Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { submitFormOnEnter } from '../../../../../utils/dom';
import { type OdsInput, type OdsInputChangeEvent } from '../../../../input/src';
import { setFormValue } from '../../controller/ods-password';
import { type OdsPasswordChangeEventDetail } from '../../interfaces/events';

@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-password.scss',
  tag: 'ods-password',
})
export class OdsPassword {
  private odsInput?: OdsInput;

  @AttachInternals() private internals!: ElementInternals;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public defaultValue?: string;
  @Prop({ reflect: true }) public hasError: boolean = false;
  @Prop({ reflect: true }) public isClearable: boolean = false;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isLoading: boolean = false;
  @Prop({ mutable: true, reflect: true }) public isMasked: boolean = true;
  @Prop({ reflect: true }) public isReadonly: boolean = false;
  @Prop({ reflect: true }) public isRequired: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public pattern?: string;
  @Prop({ reflect: true }) public placeholder?: string;
  @Prop({ mutable: true, reflect: true }) public value: string | null = null;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsToggleMask!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsPasswordChangeEventDetail>;

  @Method()
  public async clear(): Promise<void> {
    return this.odsInput?.clear();
  }

  @Method()
  public async getValidity(): Promise<ValidityState | undefined> {
    return this.odsInput?.getValidity();
  }

  @Method()
  public async toggleMask(): Promise<void> {
    return this.odsInput?.toggleMask();
  }

  @Method()
  public async reset(): Promise<void> {
    return this.odsInput?.reset();
  }

  componentWillLoad(): void {
    if (!this.value) {
      this.value = this.defaultValue ?? null;
    }
    setFormValue(this.internals, this.value);
  }

  async formResetCallback(): Promise<void> {
    await this.reset();
  }

  private onOdsChange(event: OdsInputChangeEvent): void {
    this.value = event.detail.value?.toString() ?? null;
    setFormValue(this.internals, this.value);
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-password">
        <ods-input
          ariaLabel={ this.ariaLabel }
          ariaLabelledby={ this.ariaLabelledby }
          class="ods-password__input"
          defaultValue={ this.defaultValue }
          exportparts="input"
          hasError={ this.hasError }
          isClearable={ this.isClearable }
          isDisabled={ this.isDisabled }
          isLoading={ this.isLoading }
          isMasked={ this.isMasked }
          isReadonly={ this.isReadonly }
          isRequired={ this.isRequired }
          name={ this.name }
          onKeyUp={ (event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form) }
          onOdsChange={ (event: OdsInputChangeEvent) => this.onOdsChange(event) }
          onOdsToggleMask={ () => this.isMasked = !this.isMasked }
          pattern={ this.pattern }
          placeholder={ this.placeholder }
          ref={ (el?: unknown): OdsInput => this.odsInput = el as OdsInput }
          value={ this.value }
        >
        </ods-input>
      </Host>
    );
  }
}

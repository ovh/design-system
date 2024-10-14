import type { OdsSwitchChangeEventDetail } from '../../interfaces/events';
import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { ODS_SWITCH_SIZE, type OdsSwitchSize } from '../../constant/switch-size';
import { clearItems, propagateInputId, propagateIsDisabled, propagateIsRequired, propagateName, resetItems } from '../../controller/ods-switch';

@Component({
  shadow: true,
  styleUrl: 'ods-switch.scss',
  tag: 'ods-switch',
})
export class OdsSwitch {
  @Element() el!: HTMLElement;

  @State() private isInvalid: boolean = false;

  @Prop({ reflect: true }) public isDisabled?: boolean = false;
  @Prop({ reflect: true }) public isRequired?: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public size: OdsSwitchSize = ODS_SWITCH_SIZE.md;

  @Event() odsBlur!: EventEmitter<CustomEvent<void>>;
  @Event() odsChange!: EventEmitter<OdsSwitchChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<CustomEvent<void>>;
  @Event() odsReset!: EventEmitter<void>;

  @Listen('odsInvalid')
  onOdsInvalid(event: CustomEvent<boolean>): void {
    this.isInvalid = event.detail;
  }

  @Method()
  public async clear(): Promise<void> {
    this.odsClear.emit();
    await clearItems(Array.from(this.el.children));
    this.el.focus();
  }

  @Method()
  public async reset(): Promise<void> {
    this.odsReset.emit();
    await resetItems(Array.from(this.el.children));
  }

  @Watch('isDisabled')
  propagateIsDisabled(value: boolean): void {
    propagateIsDisabled(value, Array.from(this.el.children));
  }

  @Watch('isRequired')
  propagateIsRequired(value: boolean): void {
    propagateIsRequired(value, Array.from(this.el.children));
  }

  @Watch('name')
  propagateName(value: string): void {
    propagateName(value, Array.from(this.el.children));
  }

  private init(): void {
    this.propagateIsDisabled(this.isDisabled ?? false);
    this.propagateIsRequired(this.isRequired ?? false);
    this.propagateName(this.name);
    propagateInputId(this.name, Array.from(this.el.children));
  }

  render(): FunctionalComponent {
    return (
      <Host class={{
        [`ods-switch ods-switch--${this.size}`]: true,
        'ods-switch--error': this.isInvalid,
      }}
      disabled={ this.isDisabled }>
        <slot onSlotchange={ () => this.init() }></slot>
      </Host>
    );
  }
}

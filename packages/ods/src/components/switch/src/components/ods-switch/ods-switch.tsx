import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import { type OdsRadioValueChangeEventDetail } from '../../../../radio/src';
import { ODS_SWITCH_SIZE } from '../../constant/switch-size';
import { clearItems, propagateInputId, propagateIsDisabled, propagateName, resetItems } from '../../controller/ods-switch';

@Component({
  shadow: true,
  styleUrl: 'ods-switch.scss',
  tag: 'ods-switch',
})
export class OdsSwitch {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public isDisabled?: boolean = false;
  @Prop({ reflect: true }) public isRequired?: boolean = false;
  @Prop({ reflect: true }) public name!: string;
  @Prop({ reflect: true }) public size: ODS_SWITCH_SIZE = ODS_SWITCH_SIZE.md;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsRadioValueChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    await clearItems(Array.from(this.el.children));
    this.odsClear.emit();
  }

  @Method()
  async reset(): Promise<void> {
    await resetItems(Array.from(this.el.children));
    this.odsReset.emit();
  }

  @Watch('isDisabled')
  propagateIsDisabled(value: boolean): void {
    propagateIsDisabled(value, Array.from(this.el.children));
  }

  @Watch('name')
  propagateName(value: string): void {
    propagateName(value, Array.from(this.el.children));
  }

  componentDidLoad(): void {
    this.init();
  }

  private init(): void {
    this.propagateIsDisabled(this.isDisabled ?? false);
    this.propagateName(this.name);
    propagateInputId(this.name, Array.from(this.el.children));
  }

  render(): FunctionalComponent {
    return (
      <Host class={ `ods-switch ods-switch--${this.size}` }
        onBlur={ this.odsBlur.emit() }>
        <slot onSlotchange={ () => this.init() }></slot>
      </Host>
    );
  }
}

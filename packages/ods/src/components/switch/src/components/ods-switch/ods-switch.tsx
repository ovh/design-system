import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, Watch, h } from '@stencil/core';
import { type OdsRadioValueChangeEventDetail } from '../../../../radio/src';
import { ODS_SWITCH_SIZE } from '../../constant/switch-size';
import { clearOnItems, propagateIsDisabled, propagateSize, resetOnItems } from '../../controller/ods-switch';

@Component({
  shadow: true,
  styleUrl: 'ods-switch.scss',
  tag: 'ods-switch',
})
export class OdsSwitch {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public isDisabled?: boolean = false;
  @Prop({ reflect: true }) public isRequired?: boolean = false;
  @Prop({ reflect: true }) public size: ODS_SWITCH_SIZE = ODS_SWITCH_SIZE.md;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsChange!: EventEmitter<OdsRadioValueChangeEventDetail>;
  @Event() odsClear!: EventEmitter<void>;
  @Event() odsReset!: EventEmitter<void>;

  @Method()
  async clear(): Promise<void> {
    await clearOnItems(Array.from(this.el.children));
    this.odsClear.emit();
  }

  @Method()
  async reset(): Promise<void> {
    await resetOnItems(Array.from(this.el.children));
    this.odsReset.emit();
  }

  @Watch('isDisabled')
  propagateIsDisabled(value: boolean): void {
    propagateIsDisabled(value, Array.from(this.el.children));
  }

  @Watch('size')
  propagateSize(value: ODS_SWITCH_SIZE): void {
    propagateSize(value, Array.from(this.el.children));
  }

  componentDidLoad(): void {
    this.init();
  }

  private init(): void {
    this.propagateIsDisabled(this.isDisabled ?? false);
    this.propagateSize(this.size);
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

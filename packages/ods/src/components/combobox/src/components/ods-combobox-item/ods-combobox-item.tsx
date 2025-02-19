import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { CREATE_NEW_ID } from '../../controller/ods-combobox';
import { type OdsComboboxItemSelectedEventDetail } from '../../interfaces/events';

@Component({
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-combobox-item.scss',
  tag: 'ods-combobox-item',
})
export class OdsComboboxItem {
  private internalId = getRandomHTMLId();

  @Element() el!: HTMLElement;

  /** @internal */
  @Prop({ reflect: false }) public isFocused: boolean = false;
  /** @internal */
  @Prop({ reflect: false }) public isSelected: boolean = false;
  /** @internal */
  @Prop({ reflect: false }) public isVisible: boolean = false;
  @Prop({ reflect: true }) public searchLabel?: string;
  @Prop({ reflect: true }) public selectionLabel?: string;
  @Prop({ reflect: true }) public value!: string;

  /** @internal */
  @Event() odsComboboxSelected!: EventEmitter<OdsComboboxItemSelectedEventDetail>;

  /** @internal */
  @Method()
  public async select(): Promise<void> {
    this.odsComboboxSelected.emit({
      id: this.el.id,
      text: this.selectionLabel?.trim() || this.el.textContent?.trim() || '',
      value: this.value,
    });
  }

  componentDidLoad(): void {
    if (!this.value && this.el.id !== CREATE_NEW_ID) {
      console.warn('[OdsComboboxItem] combobox item without any value set detected, this will cause unexpected behaviours. Please set a unique value to each item component.');
    }
  }

  render(): FunctionalComponent {
    const isHidden = !this.isVisible || this.isSelected;

    return (
      <Host
        aria-hidden={ isHidden }
        aria-selected={ this.isFocused }
        class={{
          'ods-combobox-item': true,
          'ods-combobox-item--focused': this.isFocused,
          'ods-combobox-item--hidden': isHidden,
        }}
        id={ this.el.id || this.internalId }
        onClick={ () => this.select() }
        role="option">
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

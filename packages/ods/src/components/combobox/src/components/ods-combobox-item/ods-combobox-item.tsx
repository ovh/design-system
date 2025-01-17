import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { getRandomHTMLId } from '../../../../../utils/dom';
import { type OdsComboboxItemSelectedEventDetail } from '../../interfaces/events';

// TODO
//  - add prop for selected text for custom element + doc
//  - add doc about searchLabel
//  - add e2e tests

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
  @Prop({ reflect: false }) public isVisible: boolean = true;
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

  render(): FunctionalComponent {
    return (
      <Host
        aria-selected={ this.isFocused }
        id={ this.el.id || this.internalId }
        role="option">
        <li
          class={{
            'ods-combobox-item': true,
            'ods-combobox-item--focused': this.isFocused,
            'ods-combobox-item--hidden': !this.isVisible || this.isSelected,
          }}
          onClick={ () => this.select() }
          tabindex="-1">
          <slot></slot>
        </li>
      </Host>
    );
  }
}

import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import type { OdsSelectOptionClickEventDetail, OdsSelectOptionEvent } from './interfaces/events';
import type { OdsSelectOptionMethod } from './interfaces/methods';
import type { OsdsSelect } from '../osds-select/osds-select';
import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { DEFAULT_ATTRIBUTE as SELECT_DEFAULT_ATTRIBUTE } from '../osds-select/constants/default-attributes';

@Component({
  tag: 'osds-select-option',
  styleUrl: 'osds-select-option.scss',
  shadow: true,
})
export class OsdsSelectOption implements OdsSelectOptionAttribute, OdsSelectOptionEvent, OdsSelectOptionMethod {
  private selectParent: (HTMLStencilElement & OsdsSelect) | null = null;

  @Element() el!: HTMLStencilElement;

  /**
   * Whether or not it is the selected value (fetched from parent).
   * UI only purpose
   * @internal
   */
  @Prop({ reflect: true }) selected?: boolean = false;
  @Prop({ reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @State() size = SELECT_DEFAULT_ATTRIBUTE.size;
  @State() tabindex = 0;

  componentWillLoad() {
    this.selectParent = this.el.closest('osds-select') as (HTMLStencilElement & OsdsSelect) | null;
    if (this.selectParent) {
      this.size = this.selectParent.size;
    }
  }

  @Event() odsSelectOptionClick!: EventEmitter<OdsSelectOptionClickEventDetail>;

  /**
   * @internal
   * @see OdsSelectOptionMethods.setTabIndex
   */
  @Method()
  async setTabIndex(value: number) {
    this.tabindex = value;
  }

  /**
   * @internal
   * @see OdsSelectOptionMethods.getLabel
   */
  @Method()
  async getLabel() {
    return this.el.innerText;
  }

  emitClick(value: OdsInputValue) {
    this.odsSelectOptionClick.emit({ value });
  }

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    this.emitClick(this.value);
  }

  render() {
    const {
      selected,
      tabindex,
      size,
    } = this;

    return (
      <Host {...{
        'aria-labelledby': this.el.innerText,
        tabindex,
        onClick: this.handleClick.bind(this),
        size,
      }}
      >
        <div {...{
          class: `option${selected ? ' selected' : ''}`,
        }}>
          <span class={'truncated'}>
            <slot></slot>
          </span>
        </div>
      </Host>
    );
  }
}

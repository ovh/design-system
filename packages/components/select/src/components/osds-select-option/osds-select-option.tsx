import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import type { OdsSelectOptionEvent, OdsSelectOptionClickEventDetail } from './interfaces/events';
import type { OdsSelectOptionMethod } from './interfaces/methods';
import type { OsdsSelect } from '../osds-select/osds-select';
import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { DEFAULT_ATTRIBUTE as SELECT_DEFAULT_ATTRIBUTE } from '../osds-select/constants/default-attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

/**
 * @slot (unnamed) - Select option content
 */
@Component({
  tag: 'osds-select-option',
  styleUrl: 'osds-select-option.scss',
  shadow: true,
})
export class OsdsSelectOption implements OdsSelectOptionAttribute, OdsSelectOptionEvent, OdsSelectOptionMethod {
  private logger = new OdsLogger('OsdsSelectOption');
  private selectParent: (HTMLStencilElement & OsdsSelect) | null = null;

  @Element() el!: HTMLStencilElement;

  /**
   * Whether or not it is the selected value (fetched from parent).
   * UI only purpose
   * @internal
   */
  @Prop({ reflect: true }) selected?: boolean = false;

  /**
   * The size of the select option
   * @internal
   */
  @State() size = SELECT_DEFAULT_ATTRIBUTE.size;

  componentWillLoad() {
    this.selectParent = this.el.closest('osds-select') as (HTMLStencilElement & OsdsSelect) | null;
    if (this.selectParent) {
      this.size = this.selectParent.size;
    }
  }

  /**
   * The tabindex of the select option
   * @internal
   */
  @State() tabindex = 0;

  /** @see OdsSelectOptionAttributes.value */
  @Prop({ reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  /** @see OdsSelectOptionEvents.odsSelectOptionClickEventDetail */
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

  @Watch('value')
  watchValue(value: OdsInputValue) {
    this.logger.log(`[select=${this.value}]`, 'value changed', { value });
  }

  @Watch('selected')
  updateSelectGroupValue(selected: boolean) {
    this.logger.log(`[select=${this.value}]`, 'selected changed.', { selected });
  }

  emitClick(value: OdsInputValue) {
    this.odsSelectOptionClick.emit({ value });
  }

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    this.logger.log(`[select=${this.value}]`, 'option clicked.');
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

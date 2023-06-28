import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsInputValue,
  OdsLogger,
  odsSelectDefaultAttributes,
  OdsSelectOption,
  OdsSelectOptionController,
  odsSelectOptionDefaultAttributes,
  OdsSelectOptionEvents,
  OdsSelectOptionMethods,
  OdsSelectOptionClickEventDetail,
} from '@ovhcloud/ods-core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OsdsSelect } from '../osds-select/osds-select';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Select option content
 */
@Component({
  tag: 'osds-select-option',
  styleUrl: 'osds-select-option.scss',
  shadow: true,
})
export class OsdsSelectOption implements OdsSelectOption<OdsStencilMethods<OdsSelectOptionMethods>, OdsStencilEvents<OdsSelectOptionEvents>> {
  private logger = new OdsLogger('OsdsSelectOption');
  private selectParent: (HTMLStencilElement & OsdsSelect) | null = null;
  controller: OdsSelectOptionController = new OdsSelectOptionController(this);

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
  @State() size = odsSelectDefaultAttributes.size;

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
  @Prop({ reflect: true }) value: OdsInputValue = odsSelectOptionDefaultAttributes.value;

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

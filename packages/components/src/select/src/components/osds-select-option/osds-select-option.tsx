import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import type { OdsSelectOptionClickEventDetail, OdsSelectOptionEvent } from './interfaces/events';
import type { OdsSelectOptionMethod } from './interfaces/methods';
import type { OdsInputValue } from '@ovhcloud/ods-common-core';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { Component, Element, Event, Host, Method, Prop, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

@Component({
  shadow: true,
  styleUrl: 'osds-select-option.scss',
  tag: 'osds-select-option',
})
export class OsdsSelectOption implements OdsSelectOptionAttribute, OdsSelectOptionEvent, OdsSelectOptionMethod {
  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) selected?: boolean = false;
  @Prop({ reflect: true }) value: OdsInputValue = DEFAULT_ATTRIBUTE.value;

  @State() tabindex = 0;

  @Event() odsSelectOptionClick!: EventEmitter<OdsSelectOptionClickEventDetail>;

  @Method()
  async getLabel(): Promise<string> {
    return this.el.innerText;
  }

  emitClick(value: OdsInputValue): void {
    this.odsSelectOptionClick.emit({ value });
  }

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
    this.emitClick(this.value);
  }

  render(): FunctionalComponent {
    return (
      <Host
        aria-labelledby={ this.el.innerText }
        onClick={ (e: MouseEvent): void => this.handleClick(e) }
        size="md">
        <div class={{
          option: true,
          selected: !!this.selected,
        }}>
          <span class="truncated">
            <slot></slot>
          </span>
        </div>
      </Host>
    );
  }
}

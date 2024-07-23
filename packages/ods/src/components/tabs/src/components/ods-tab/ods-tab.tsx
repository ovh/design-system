import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { type OdsTabSelectedEventDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-tab.scss',
  tag: 'ods-tab',
})
export class OdsTab {
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isSelected: boolean = false;

  @Event() odsTabSelected!: EventEmitter<OdsTabSelectedEventDetail>;

  private onClick(event: MouseEvent): void {
    if (!this.isDisabled) {
      this.odsTabSelected.emit(event);
    }
  }

  private onKeyDown(event: KeyboardEvent): void {
    // This prevents Space key to scroll the window down
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  private onKeyUp(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      this.odsTabSelected.emit(event);
    }
  }

  render(): FunctionalComponent {
    return (
      <Host
        class={{
          'ods-tab': true,
          'ods-tab--disabled': this.isDisabled,
          'ods-tab--selected': this.isSelected,
        }}
        onClick={ (e: MouseEvent) => this.onClick(e) }
        onKeyDown={ (e: KeyboardEvent) => this.onKeyDown(e) }
        onKeyUp={ (e: KeyboardEvent) => this.onKeyUp(e) }
        role="tab"
        tabindex={ this.isDisabled ? -1 : 0 }>
        <slot></slot>
      </Host>
    );
  }
}

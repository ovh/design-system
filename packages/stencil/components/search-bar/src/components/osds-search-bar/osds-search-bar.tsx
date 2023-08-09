import type { OdsInputValueChangeEvent } from '@ovhcloud/ods-component-input';
import type { OdsSelectValueChangeEvent } from '@ovhcloud/ods-component-select';
import { Component, Element, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import {
  OdsSearchBar,
  OdsSearchBarController,
  odsSearchBarDefaultAttributes,
  OdsSearchBarEvents,
  OdsSearchBarMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { ODS_BUTTON_SIZE } from '@ovhcloud/ods-component-button';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';

/**
 * @slot (unnamed) - SearchBar content
 */
@Component({
  tag: 'osds-search-bar',
  styleUrl: 'osds-search-bar.scss',
  shadow: true
})
export class OsdsSearchBar implements OdsSearchBar<OdsStencilMethods<OdsSearchBarMethods>, OdsStencilEvents<OdsSearchBarEvents>> {
  controller: OdsSearchBarController = new OdsSearchBarController(this);
  private optionValue: string = '';

  @Element() el!: HTMLElement;

  /** @see OdsSearchBarAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsSearchBarDefaultAttributes.contrasted;

  /** @see OdsSearchBarAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = odsSearchBarDefaultAttributes.disabled;

  /** @see OdsSearchBarAttributes.loading */
  @Prop({ reflect: true }) public loading?: boolean = odsSearchBarDefaultAttributes.loading;

  /** @see OdsSearchBarAttributes.placeholder */
  @Prop({ reflect: true }) public placeholder?: string = odsSearchBarDefaultAttributes.placeholder;

  /** @see OdsSearchBarAttributes.options */
  @Prop({ reflect: true }) public options?: { label: string; value: string; }[] = odsSearchBarDefaultAttributes.options;

  /** @see OdsSearchBarAttributes.value */
  @Prop({ reflect: true, mutable: true }) public value: string = odsSearchBarDefaultAttributes.value;

  /** @see OdsSearchBarEvents.odsSearchSubmit */
  @Event() odsSearchSubmit!: EventEmitter<{ optionValue: string; inputValue: string }>;

  @Listen('odsValueChange')
  onValueChange(event: OdsInputValueChangeEvent | OdsSelectValueChangeEvent): void {
    const isOdsSelectValueChange = 'selection' in event.detail;
    if (isOdsSelectValueChange) {
      this.optionValue = event.detail.value?.toString() ?? '';
      return;
    }
    this.value = event.detail.value?.toString() ?? '';
  }

  // should by handler by the button and just listen the click event
  handlerOnKeydownInput(event: KeyboardEvent): void {
    const isEnter = event.code.includes('Enter');
    const isSpace = event.code.includes('Space');
    if (isEnter || isSpace) {
      this.handlerOnClickSearchButton();
    }
  }

  handlerOnClickSearchButton(): void {
    this.emitSearchSubmit();
  }

  emitSearchSubmit(): void {
    this.odsSearchSubmit.emit({ optionValue: this.optionValue, inputValue: this.value });
  }

  render() {
    const hasSelect = Boolean(this.options?.length);

    return (
      <Host>
        {
          hasSelect &&
          <osds-select
            tabindex="0"
            disabled={ this.disabled }>
            { this.options?.map((option) => <osds-select-option value={ option.value }>{ option.label }</osds-select-option>) }
          </osds-select>
        }

        <osds-input
          tabindex="1"
          color={ OdsThemeColorIntent.primary }
          type={ ODS_INPUT_TYPE.text }
          clearable
          contrasted={ this.contrasted }
          value={ this.value }
          loading={ this.loading }
          disabled={ this.disabled }
          placeholder={ this.placeholder }
          class={{ 'first': !hasSelect }}>
        </osds-input>

        <osds-button
          tabindex="2"
          onClick={ () => this.handlerOnClickSearchButton() }
          onKeyDown={ (event: KeyboardEvent) => this.handlerOnKeydownInput(event) }
          size={ ODS_BUTTON_SIZE.sm }
          color={ OdsThemeColorIntent.primary }
          disabled={ this.disabled }
          contrasted={ this.contrasted }>
          <osds-icon
            color={ OdsThemeColorIntent.primary }
            size={ ODS_ICON_SIZE.sm }
            contrasted={ !this.contrasted }
            name={ ODS_ICON_NAME.SEARCH } />
        </osds-button>
      </Host>
    );
  }
}

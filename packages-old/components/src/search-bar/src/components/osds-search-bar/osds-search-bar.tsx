import type { OdsSearchBarAttribute, OdsSearchbarOption } from './interfaces/attributes';
import type { OdsSearchBarEvent } from './interfaces/events';
import type { OdsInputValueChangeEvent, OdsInputValueChangeEventDetail } from '../../../../input/src';
import type { OdsSelectValueChangeEvent } from '../../../../select/src';
import type { EventEmitter } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Event, Host, Listen, Prop, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_BUTTON_SIZE } from '../../../../button/src';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '../../../../icon/src';
import { ODS_INPUT_TYPE } from '../../../../input/src';

@Component({
  shadow: true,
  styleUrl: 'osds-search-bar.scss',
  tag: 'osds-search-bar',
})
export class OsdsSearchBar implements OdsSearchBarAttribute, OdsSearchBarEvent {
  private optionValue: string = '';

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) public loading?: boolean = DEFAULT_ATTRIBUTE.loading;
  @Prop({ reflect: true }) public placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;
  @Prop({ reflect: true }) public options?: OdsSearchbarOption[] = DEFAULT_ATTRIBUTE.options;
  @Prop({ mutable: true, reflect: true }) public value: string = DEFAULT_ATTRIBUTE.value;

  @Event() odsBlur!: EventEmitter<void>;
  @Event() odsFocus!: EventEmitter<void>;
  @Event() odsSearchSubmit!: EventEmitter<{ optionValue: string; inputValue: string }>;
  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  @Listen('odsInputBlur')
  onInputBlur(): void {
    this.odsBlur.emit();
  }

  @Listen('odsInputFocus')
  onInputFocus(): void {
    this.odsFocus.emit();
  }

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
    if (event.code.includes('Enter')) {
      this.handlerOnClickSearchButton();
    }
  }

  handlerOnClickSearchButton(): void {
    this.emitSearchSubmit();
  }

  emitSearchSubmit(): void {
    this.odsSearchSubmit.emit({ inputValue: this.value, optionValue: this.optionValue });
  }

  render(): JSX.Element {
    const hasSelect = Boolean(this.options?.length);

    return (
      <Host>
        {
          hasSelect
          && <osds-select
            tabindex="0"
            disabled={ this.disabled }>
            { this.options?.map((option) => <osds-select-option value={ option.value }>{ option.label }</osds-select-option>) }
          </osds-select>
        }

        <osds-input
          tabindex="1"
          color={ ODS_THEME_COLOR_INTENT.primary }
          type={ ODS_INPUT_TYPE.text }
          clearable
          contrasted={ this.contrasted }
          onKeyDown={ (event: KeyboardEvent): void => this.handlerOnKeydownInput(event) }
          value={ this.value }
          loading={ this.loading }
          disabled={ this.disabled }
          placeholder={ this.placeholder }
          class={{ 'first': !hasSelect }}>
        </osds-input>

        <osds-button
          tabindex="2"
          onClick={ (): void => this.handlerOnClickSearchButton() }
          size={ ODS_BUTTON_SIZE.sm }
          color={ ODS_THEME_COLOR_INTENT.primary }
          disabled={ this.disabled }
          contrasted={ this.contrasted }>
          <osds-icon
            color={ ODS_THEME_COLOR_INTENT.primary }
            size={ ODS_ICON_SIZE.sm }
            contrasted={ !this.contrasted }
            name={ ODS_ICON_NAME.SEARCH } />
        </osds-button>
      </Host>
    );
  }
}

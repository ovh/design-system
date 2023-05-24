import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import {
  OdsAutocomplete,
  OdsAutocompleteController,
  OdsAutocompleteEvents,
  OdsAutocompleteMethods,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Autocomplete content
 */
@Component({
  tag: 'osds-autocomplete',
  styleUrl: 'osds-autocomplete.scss',
  shadow: true
})
export class OsdsAutocomplete implements OdsAutocomplete<OdsStencilMethods<OdsAutocompleteMethods>, OdsStencilEvents<OdsAutocompleteEvents>> {
  controller: OdsAutocompleteController = new OdsAutocompleteController(this);

  @Element() el!: HTMLElement;
  input: HTMLInputElement = null as unknown as HTMLInputElement;

  @Prop({ reflect: true }) items: string[] = [];

  @State() showSuggestions?: boolean;
  @State() inputValue = '';
  @State() suggestions: string[] = [];

  @Watch('items')
  validateItems(newValue: string[]) {
    const sortedArr = newValue.slice().sort();
    const results = [];
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        results.push(sortedArr[i]);
      }
    }
    if (results.length > 0) {
      throw new Error(`suggestion list contains duplicate values: ${results.toLocaleString()}`);
    }
  }

  sanitizer(text: string): string {
    return text
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();
  }

  splitter(text: string, query: string): string[] {
    const regexWithSanitizedQuery = new RegExp(`(${this.sanitizer(query)})`, 'gi');
    const regexWithQuery = new RegExp(`(${query})`, 'gi');

    return text.includes(query) ?
      text.split(regexWithQuery).filter((value) => value) :
      text.split(regexWithSanitizedQuery).filter((value) => value);
  }

  initInput(): void {
    const foundNativeInput = this.el.querySelector('input');
    if (!foundNativeInput) {
      return;
    }

    this.input = foundNativeInput;
    this.input.addEventListener('input', () => this.onInput());
  }

  componentWillLoad() {
    this.validateItems(this.items);
    this.initInput();
    this.suggestions = this.findMatch(this.input.value);
  }

  findMatch = (searchTerm: string): string[] => {
    const searchTermArr = searchTerm.split(' ');

    return this.items.filter((item) => {
      const itemArr = item.split(' ');
      return searchTermArr.every((term) => itemArr.some((item) => item.toLowerCase().includes(term.toLowerCase())));
    });
  }

  onInput = () => {
    this.showSuggestions = true;
    this.suggestions = this.findMatch(this.input.value);
  };

  onSelect = (selection: string) => {
    this.input.value = selection;
  }

  getSuggestionElement = (suggestion: string) => {
    return (
      <osds-select-option
        onClick={() => this.onSelect(suggestion)}
      >
        {this.splitter(suggestion, this.input.value).map((value) => {
            return value.toLowerCase() === this.input.value.toLowerCase() ?
                <strong>{value}</strong> :
                <span>{value}</span>;
            })
        }
      </osds-select-option>
    );
  };

  render() {
    return <Host>
        <osds-select
          opened={this.showSuggestions}
        >
          <span slot="placeholder">
            <slot />
          </span>
          {this.suggestions.map(suggestion => this.getSuggestionElement(suggestion))}
        </osds-select>
    </Host>
  }
}

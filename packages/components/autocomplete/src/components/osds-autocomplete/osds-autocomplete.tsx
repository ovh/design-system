import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { EventEmitter } from '@stencil/core';
import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import type { OdsAutocompleteEvent } from './interfaces/events';
import type { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import type { OdsSelectOptionClickEventDetail } from '@ovhcloud/ods-component-select';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { Component, Element, Event, Host, h, Listen, Prop, State } from '@stencil/core';
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsAutocompleteController } from './core/controller';

/**
 * @slot (unnamed) - Autocomplete content
 */
@Component({
  tag: 'osds-autocomplete',
  styleUrl: 'osds-autocomplete.scss',
  shadow: true
})
export class OsdsAutocomplete implements OdsAutocompleteAttribute, OdsAutocompleteEvent {
  controller: OdsAutocompleteController = new OdsAutocompleteController(this);
  surface: OcdkSurface | undefined = undefined;

  /**
   * Properties
  */

  @Element() el!: HTMLElement;
  @State() hasFocus = false;
  @State() isSlotEmpty = true;

  /**
   * Attributes
  */

  /** @see OdsAutocompleteAttribute.clearable */
  @Prop({ reflect: true }) clearable?: boolean = DEFAULT_ATTRIBUTE.clearable;

  /** @see OdsAutocompleteAttribute.color */
  @Prop({ reflect: true }) color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsAutocompleteAttribute.disabled */
  @Prop({ reflect: true }) disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsAutocompleteAttribute.error */
  @Prop({ reflect: true }) error?: boolean = DEFAULT_ATTRIBUTE.error;

  /** @see OdsAutocompleteAttribute.icon */
  @Prop({ reflect: true }) icon?: ODS_ICON_NAME = DEFAULT_ATTRIBUTE.icon;

  /** @see OdsAutocompleteAttribute.inline */
  @Prop({ reflect: true }) inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsAutocompleteAttribute.minimumNumberOfCharacters */
  @Prop({ reflect: true }) minimumNumberOfCharacters?: number = DEFAULT_ATTRIBUTE.minimumNumberOfCharacters;

  /** @see OdsAutocompleteAttribute.placeholder */
  @Prop({ reflect: true }) placeholder?: string = DEFAULT_ATTRIBUTE.placeholder;

  /** @see OdsAutocompleteAttribute.value */
  @Prop({ reflect: true, mutable: true }) value?: string = DEFAULT_ATTRIBUTE.value;

  /**
   * Events
  */

  /** @see OdsAutocompleteEvent.odsAutocompleteBlur */
  @Event() odsAutocompleteBlur!: EventEmitter<void>;

  /** @see OdsAutocompleteEvent.odsAutocompleteFocus */
  @Event() odsAutocompleteFocus!: EventEmitter<void>;

  /**
   * Listeners
  */

  @Listen('odsValueChange')
  handleInputValueChange(event: CustomEvent) {
    this.onChange(event.detail.value);
  }

  /**
   * Emitters
  */

  emitBlur(): void {
    this.odsAutocompleteBlur.emit();
  }

  emitFocus(): void {
    this.odsAutocompleteFocus.emit();
  }

  /**
   * Methods
  */

  onBlur(): void {
    this.controller.onBlur();
  }

  onChange(value?: string): void {
    this.controller.onChange(value);
  }

  onFocus(): void {
    this.controller.onFocus();
  }

  handleSlotChange():void {
    // Checking if slot is empty
  }

  /**
   * Lifecycle
  */

  render() {
    const {
      clearable,
      color,
      disabled,
      error,
      hasFocus,
      icon,
      inline,
      placeholder,
      value,
    } = this;

    return (
      <Host {...{
        hasFocus: this.value
          && this.minimumNumberOfCharacters
          && this.value.length >= this.minimumNumberOfCharacters
          ? hasFocus
          : false,
        inline,
        onBlur: () => this.onBlur(),
        onFocus: () => this.onFocus(),
      }}>
        <osds-input {...{
          clearable,
          color,
          disabled,
          error,
          icon,
          inline,
          placeholder,
          type: ODS_INPUT_TYPE.text,
          value,
        }}/>
        <div class='anchor'>
          <ocdk-surface
            class="overlay"
            ref={(el: HTMLElement) => {
              if (ocdkIsSurface(el)) {
                this.surface = el as OcdkSurface;
                // this.syncReferences();
              }
            }}>
            <slot onSlotchange={() => this.handleSlotChange()}></slot>
          </ocdk-surface>
        </div>
      </Host>
    );
  }
}

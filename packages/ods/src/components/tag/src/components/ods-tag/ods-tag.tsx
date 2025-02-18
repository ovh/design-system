import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Prop, h } from '@stencil/core';
import { ODS_ICON_NAME, type OdsIconName } from '../../../../icon/src';
import { ODS_TAG_COLOR, type OdsTagColor } from '../../constants/tag-color';
import { ODS_TAG_SIZE, type OdsTagSize } from '../../constants/tag-size';
import { handleClick, handleKeyDown, handleKeyUp } from '../../controller/ods-tag';
import { type OdsTagRemoveEventDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-tag.scss',
  tag: 'ods-tag',
})
export class OdsTag {
  private tagElement?: HTMLElement;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public color: OdsTagColor = ODS_TAG_COLOR.information;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public label!: string;
  @Prop({ reflect: true }) public size: OdsTagSize = ODS_TAG_SIZE.md;

  @Event() odsRemove!: EventEmitter<OdsTagRemoveEventDetail>;

  @Listen('click')
  onClick(): void {
    handleClick(this.el, this.isDisabled, this.odsRemove);
  }

  @Listen('keydown')
  onKeyDown(event: KeyboardEvent): void {
    handleKeyDown(event);
  }

  @Listen('keyup')
  onKeyUp(event: KeyboardEvent): void {
    handleKeyUp(event, this.el, this.isDisabled, this.odsRemove);
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-tag"
        onFocus={ () => this.tagElement?.focus() }>
        <div
          class={{
            'ods-tag__tag': true,
            'ods-tag__tag--disabled': this.isDisabled,
            [`ods-tag__tag--${this.color}`]: true,
            [`ods-tag__tag--${this.size}`]: true,
          }}
          part="tag"
          ref={ (el?: HTMLElement) => el && (this.tagElement = el) }
          tabindex={ this.isDisabled ? -1 : 0 }>
          {
            !!this.icon &&
            <ods-icon
              class="ods-tag__tag__icon"
              name={ this.icon }>
            </ods-icon>
          }

          <span class="ods-tag__tag__label">
            { this.label }
          </span>

          <ods-icon
            class="ods-tag__tag__close"
            name={ ODS_ICON_NAME.xmark }>
          </ods-icon>
        </div>
      </Host>
    );
  }
}

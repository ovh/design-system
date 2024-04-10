import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Prop, h } from '@stencil/core';
import { ODS_ICON_NAME, type OdsIconName } from '../../../../icon/src';
import { ODS_TAG_COLOR, type OdsTagColor } from '../../constants/tag-color';
import { ODS_TAG_SHAPE, type OdsTagShape } from '../../constants/tag-shape';
import { ODS_TAG_SIZE, type OdsTagSize } from '../../constants/tag-size';
import { ODS_TAG_VARIANT, type OdsTagVariant } from '../../constants/tag-variant';
import { handleClick, handleKeyDown, handleKeyUp } from '../../controller/ods-tag';
import { type OdsTagEventRemoveDetail } from '../../interfaces/events';

@Component({
  shadow: true,
  styleUrl: 'ods-tag.scss',
  tag: 'ods-tag',
})
export class OdsTag {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public color: OdsTagColor = ODS_TAG_COLOR.information;
  @Prop({ reflect: true }) public icon?: OdsIconName;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public label!: string;
  @Prop({ reflect: true }) public shape: OdsTagShape = ODS_TAG_SHAPE.round;
  @Prop({ reflect: true }) public size: OdsTagSize = ODS_TAG_SIZE.md;
  @Prop({ reflect: true }) public variant: OdsTagVariant = ODS_TAG_VARIANT.default;

  @Event() odsRemove!: EventEmitter<OdsTagEventRemoveDetail>;

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
      <Host class="ods-tag">
        <div
          class={{
            'ods-tag__tag': true,
            'ods-tag__tag--disabled': this.isDisabled,
            [`ods-tag__tag--${this.color}`]: true,
            [`ods-tag__tag--${this.shape}`]: true,
            [`ods-tag__tag--${this.size}`]: true,
            [`ods-tag__tag--${this.variant}`]: true,
          }}
          part="tag"
          tabindex={ this.isDisabled ? -1 : 0 }>
          {
            !!this.icon &&
            <ods-icon name={ this.icon }>
            </ods-icon>
          }

          { this.label }

          <ods-icon name={ ODS_ICON_NAME.cross }>
          </ods-icon>
        </div>
      </Host>
    );
  }
}

import { Component, type FunctionalComponent, Host, Prop, h } from '@stencil/core';
import { ODS_TEXT_PRESET, type OdsTextPreset } from '../../constants/text-preset';

@Component({
  shadow: true,
  styleUrl: 'ods-text.scss',
  tag: 'ods-text',
})
export class OdsText {
  @Prop({ reflect: true }) public preset?: OdsTextPreset = ODS_TEXT_PRESET.paragraph;

  getTag(): string {
    switch (this.preset) {
      case ODS_TEXT_PRESET.paragraph:
        return 'p';
      case ODS_TEXT_PRESET.caption:
        return 'span';
      case ODS_TEXT_PRESET.code:
        return 'code';
      case ODS_TEXT_PRESET.span:
        return 'span';
      case ODS_TEXT_PRESET.heading1:
        return 'h1';
      case ODS_TEXT_PRESET.heading2:
        return 'h2';
      case ODS_TEXT_PRESET.heading3:
        return 'h3';
      case ODS_TEXT_PRESET.heading4:
        return 'h4';
      case ODS_TEXT_PRESET.heading5:
        return 'h5';
      case ODS_TEXT_PRESET.heading6:
        return 'h6';
      default:
        return 'p';
    }
  }

  render(): FunctionalComponent {
    const Tag = this.getTag();
    return (
      <Host class="ods-text">
        <Tag class={ `ods-text--${this.preset}` } part="text">
          <slot />
        </Tag>
      </Host>
    );
  }
}

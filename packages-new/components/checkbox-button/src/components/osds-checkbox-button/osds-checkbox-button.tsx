import type { OdsCheckboxButtonAttribute } from './interfaces/attributes';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { OdsCheckboxButtonController } from './core/ods-checkbox-button-controller';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCheckboxButtonSize } from './constants/ods-checkbox-button-size';

/**
 * @slot start - Fixed start checkbox button content
 * @slot end - Fixed end checkbox button content
 */
@Component({
  tag: 'osds-checkbox-button',
  styleUrl: 'osds-checkbox-button.scss',
  shadow: true
})
export class OsdsCheckboxButton implements OdsCheckboxButtonAttribute {
  controller = new OdsCheckboxButtonController();
  @Element() el!: HTMLElement;
  public mainEl?: HTMLElement;

  /** @see OdsCheckboxButtonAttribute.checked */
  @Prop({ reflect: true }) public checked? = DEFAULT_ATTRIBUTE.checked;

  /** @see OdsCheckboxButtonAttribute.checking */
  @Prop({ reflect: true }) public checking? = DEFAULT_ATTRIBUTE.checking;

  /** @see OdsCheckboxButtonAttribute.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = DEFAULT_ATTRIBUTE.color;

  /** @see OdsCheckboxButtonAttribute.disabled */
  @Prop({ reflect: true }) public disabled? = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsCheckboxButtonAttribute.hasFocus */
  @Prop({ reflect: true }) public hasFocus? = DEFAULT_ATTRIBUTE.hasFocus;

  /** @see OdsCheckboxButtonAttribute.indeterminate */
  @Prop({ reflect: true }) public indeterminate? = DEFAULT_ATTRIBUTE.indeterminate;

  /** @see OdsCheckboxButtonAttribute.interactive */
  @Prop({ reflect: true }) public interactive? = DEFAULT_ATTRIBUTE.interactive;

  /** @see OdsCheckboxButtonAttribute.label */
  @Prop({ reflect: true }) public size?: OdsCheckboxButtonSize = DEFAULT_ATTRIBUTE.size;

  render() {
    const {
      checked,
      color,
      indeterminate,
      size,
    } = this;
    const iconName = this.controller.computeIconName(checked, indeterminate);
    let iconSize;
    // make corresponding between button size and icon size
    switch (size) {
      case OdsCheckboxButtonSize.sm:
        iconSize = ODS_ICON_SIZE.sm;
        break;
      case OdsCheckboxButtonSize.md:
        iconSize = ODS_ICON_SIZE.md;
        break;
      default:
        iconSize = ODS_ICON_SIZE.sm;
        break;
    }
    return (
      <Host>
        <slot name={'start'}></slot>
        <div
          class={'checkbox-button'}
          {...{
            ref: (el) => this.mainEl = el as HTMLElement,
          }}
        >
          <osds-icon color={color} name={iconName} size={iconSize}></osds-icon>
        </div>
        <slot name={'end'}></slot>
      </Host>
    );
  }
}

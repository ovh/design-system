import { Component, Element, Host, Prop, h } from '@stencil/core';
import {
  OdsCheckboxButton,
  OdsCheckboxButtonController,
  OdsCheckboxButtonMethods,
  OdsCheckboxButtonSize,
  odsCheckboxButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

/**
 * @slot start - Fixed start checkbox button content
 * @slot end - Fixed end checkbox button content
 */
@Component({
  tag: 'osds-checkbox-button',
  styleUrl: 'osds-checkbox-button.scss',
  shadow: true
})
export class OsdsCheckboxButton implements OdsCheckboxButton<OdsStencilMethods<OdsCheckboxButtonMethods>> {
  controller: OdsCheckboxButtonController = new OdsCheckboxButtonController(this);
  @Element() el!: HTMLElement;
  public mainEl?: HTMLElement;

  /** @see OdsCheckboxButtonAttributes.checked */
  @Prop({ reflect: true }) public checked? = odsCheckboxButtonDefaultAttributes.checked;

  /** @see OdsCheckboxButtonAttributes.checking */
  @Prop({ reflect: true }) public checking? = odsCheckboxButtonDefaultAttributes.checking;

  /** @see OdsCheckboxButtonAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsCheckboxButtonDefaultAttributes.color;

  /** @see OdsCheckboxButtonAttributes.disabled */
  @Prop({ reflect: true }) public disabled? = odsCheckboxButtonDefaultAttributes.disabled;

  /** @see OdsCheckboxButtonAttributes.hasFocus */
  @Prop({ reflect: true }) public hasFocus? = odsCheckboxButtonDefaultAttributes.hasFocus;

  /** @see OdsCheckboxButtonAttributes.indeterminate */
  @Prop({ reflect: true }) public indeterminate? = odsCheckboxButtonDefaultAttributes.indeterminate;

  /** @see OdsCheckboxButtonAttributes.interactive */
  @Prop({ reflect: true }) public interactive? = odsCheckboxButtonDefaultAttributes.interactive;

  /** @see OdsCheckboxButtonAttributes.label */
  @Prop({ reflect: true }) public size?: OdsCheckboxButtonSize = odsCheckboxButtonDefaultAttributes.size;

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

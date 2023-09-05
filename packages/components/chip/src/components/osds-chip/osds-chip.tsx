import type { ODS_CHIP_SIZE } from './constants/chip-size';
import type { ODS_CHIP_VARIANT } from './constants/chip-variant';
import type { OdsChipAttribute } from './interfaces/attributes';
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsChipController } from './core/controller';

/**
 * @slot (unnamed) - Chip content
 */
@Component({
  tag: 'osds-chip',
  styleUrl: 'osds-chip.scss',
  shadow: true
})
export class OsdsChip implements OdsChipAttribute {
  controller: OdsChipController = new OdsChipController(this);
  @Element() el!: HTMLElement;

  /** @see OdsChipAttributes.color */
  @Prop({ reflect: true }) public color?: ODS_THEME_COLOR_INTENT = DEFAULT_ATTRIBUTE.color;

  /** @see OdsChipAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsChipAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  /** @see OdsChipAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsChipAttributes.removable */
  @Prop({ reflect: true }) public removable?: boolean = DEFAULT_ATTRIBUTE.removable;

  /** @see OdsChipAttributes.selectable */
  @Prop({ reflect: true }) public selectable?: boolean = DEFAULT_ATTRIBUTE.selectable;

  /** @see OdsChipAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_CHIP_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsChipAttributes.variant */
  @Prop({ reflect: true }) public variant?: ODS_CHIP_VARIANT = DEFAULT_ATTRIBUTE.variant;

  /**
   * @see OdsChipBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  render() {
    const { color, contrasted, removable, selectable } = this;
    const isSelectable = selectable || removable;

    return (
      <Host tabindex={isSelectable ? '0' : '-1'}>
        <span class={'chip__wrapper'}>
          <slot></slot>
          {
            removable ?
              <osds-icon color={color}
                         contrasted={contrasted}
                         name={ODS_ICON_NAME.CLOSE}
                         size={ODS_ICON_SIZE.xxs}>
              </osds-icon> : ''
          }
        </span>
      </Host>
    );
  }
}
